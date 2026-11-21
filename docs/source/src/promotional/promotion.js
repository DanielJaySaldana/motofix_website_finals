import { featureIcons } from "./feature-icons.js";

/**
 * Progressive enhancement for promotional/index.html.
 * Content lives in promotional/*.html, design in the matching section CSS files,
 * and behavior in this file. promotional.css only loads the section stylesheets.
 * Returns a cleanup function for the React preview wrapper.
 */
export function initializePromotion(root) {
  const controller = new AbortController();
  const assetBase = root.dataset.assetBase || "";
  const appBase = root.dataset.baseUrl || "";
  const on = (element, event, handler) =>
    element?.addEventListener(event, handler, { signal: controller.signal });
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const menu = root.querySelector("#promo-menu-toggle");
  const navigation = root.querySelector("#promo-navigation");

  function setMenu(open) {
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    navigation.classList.toggle("is-open", open);
    menu.querySelector("svg").innerHTML = open
      ? '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
      : '<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>';
  }
  on(menu, "click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  navigation.querySelectorAll("a").forEach((link) => on(link, "click", () => setMenu(false)));
  on(window, "keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menu.focus();
    }
  });

  // Every audience has real HTML content, including when JavaScript is disabled.
  const selectedFeatures = new Map();
  function selectFeature(panel, index, scroll = false) {
    const items = [...panel.querySelectorAll(".promo-feature-item")];
    index = (index + items.length) % items.length;
    selectedFeatures.set(panel.id, index);
    items.forEach((item, current) => {
      item.classList.toggle("active", current === index);
      item.querySelector("button").setAttribute("aria-expanded", String(current === index));
      item.querySelector(":scope > div").hidden = current !== index;
    });
    const item = items[index];
    const number = String(index + 1).padStart(2, "0");
    const stage = panel.querySelector(".promo-feature-stage");
    stage.querySelector(".promo-stage-top > span:last-child").textContent =
      `${number} / ${String(items.length).padStart(2, "0")}`;
    stage.querySelector(".promo-stage-numeral").textContent = number;
    const title = item.querySelector("button > span:nth-child(2)").textContent.trim();
    const image = stage.querySelector(".promo-feature-phone-wrap img");
    image.src = `${item.dataset.image}?v=5.1`;
    image.alt = `Actual MotoFix mobile screen: ${title}`;
    const icon = stage.querySelector(".promo-feature-icon-tile svg");
    icon.innerHTML = featureIcons[item.dataset.icon] || "";
    const phone = stage.querySelector(".promo-feature-phone-wrap");
    // Restart the source site's screen transition without replacing the content.
    phone.getAnimations().forEach((animation) => {
      animation.cancel();
      animation.play();
    });
    if (scroll && matchMedia("(max-width: 600px)").matches) {
      stage.scrollIntoView({
        block: "start",
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    }
  }

  root.querySelectorAll('[id^="features-"][role="tabpanel"]').forEach((panel) => {
    panel.querySelectorAll(".promo-feature-item button").forEach((button, index) => {
      on(button, "click", (event) => selectFeature(panel, index, event.detail > 0));
    });
    on(panel.querySelector('[aria-label="Previous feature"]'), "click", () =>
      selectFeature(panel, selectedFeatures.get(panel.id) - 1),
    );
    on(panel.querySelector('[aria-label="Next feature"]'), "click", () =>
      selectFeature(panel, selectedFeatures.get(panel.id) + 1),
    );
    selectFeature(panel, 0);
  });

  root.querySelectorAll(".promo-audience-tabs").forEach((tablist) => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    function selectTab(selected) {
      tabs.forEach((tab) => {
        const active = tab === selected;
        tab.classList.toggle("active", active);
        tab.tabIndex = active ? 0 : -1;
        tab.setAttribute("aria-selected", String(active));
        const panel = root.querySelector(`#${tab.getAttribute("aria-controls")}`);
        panel.hidden = !active;
        if (active && panel.id.startsWith("features-")) selectFeature(panel, 0);
      });
    }
    tabs.forEach((tab, index) => {
      on(tab, "click", () => selectTab(tab));
      on(tab, "keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? tabs.length - 1
              : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
        selectTab(tabs[next]);
        tabs[next].focus();
      });
    });
  });

  const videoCover = root.querySelector(".promo-video-cover");
  on(videoCover, "click", () => {
    const frame = videoCover.parentElement;
    const video = document.createElement("video");
    video.src = `${assetBase}/promo/motofix-final-promotional.mp4`;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = `${assetBase}/promo/final-promotional-poster.jpg`;
    video.setAttribute("aria-label", "MotoFix promotional video");
    on(video, "error", () => {
      const fallback = document.createElement("div");
      fallback.className = "promo-video-fallback";
      const text = document.createElement("p");
      text.textContent = "The video couldn’t load.";
      const link = document.createElement("a");
      link.className = "promo-button";
      link.href = video.src;
      link.textContent = "Open the promotional video";
      fallback.append(text, link);
      frame.replaceChildren(fallback);
    });
    frame.replaceChildren(video);
    video.play().catch(() => {
      /* Native controls remain available if autoplay is blocked. */
    });
  });

  // XAMPP stores feedback locally in MySQL; no online service is contacted.
  const form = root.querySelector("#feedback form");
  on(form, "submit", async (event) => {
    event.preventDefault();
    const fields = new FormData(form);
    const status = form.querySelector('[aria-live="polite"]');
    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    status.textContent = "Saving your feedback…";
    try {
      const response = await fetch(`${appBase}/feedback.php`, {
        method: "POST",
        body: fields,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "Feedback could not be saved.");
      form.reset();
      status.textContent = result.message;
    } catch (error) {
      status.textContent = error instanceof Error ? error.message : "Feedback could not be saved.";
    } finally {
      submitButton.disabled = false;
    }
  });

  const observers = [];
  if ("IntersectionObserver" in window) {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          reveal.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );
    if (!reducedMotion.matches) {
      root.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("reveal-ready");
        reveal.observe(element);
      });
    }
    const activeSection = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navigation.querySelectorAll("a").forEach((link) => {
            if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    root.querySelectorAll("main section[id]").forEach((section) => activeSection.observe(section));
    observers.push(reveal, activeSection);
  }
  return () => {
    controller.abort();
    observers.forEach((observer) => observer.disconnect());
  };
}
