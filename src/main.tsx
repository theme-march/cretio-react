import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Removed BrowserRouter for Data API compatibility
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@/index.scss";
import App from "@/App.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error(
    "Root element not found. Make sure you have <div id='root'></div> in index.html"
  );
}
