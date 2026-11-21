import { createRoot } from "react-dom/client";
import { loadSystem } from "../shared/published-runtime";
import "../shared/base.css";
import "./system.css";
import "../index.css";

if (window.location.pathname === "/system/index.html") {
  history.replaceState(null, "", "/preview" + window.location.search);
}
loadSystem().then((System) => createRoot(document.getElementById("root")!).render(<System />));
