import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";

import "./i18n/i18n.js";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);
