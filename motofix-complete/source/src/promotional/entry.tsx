import { initializePromotion } from "./promotion.js";
import "../shared/base.css";
import "./promotional.css";
import "../index.css";

// Vite assembles the section HTML files; attach behavior without replacing them.
initializePromotion(document.getElementById("root")!);
