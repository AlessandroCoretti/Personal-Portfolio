import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
//import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(<App />);
