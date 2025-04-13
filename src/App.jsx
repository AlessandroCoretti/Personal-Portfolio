import { useEffect } from "react";
import "./css/App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.body.style.setProperty("--x", x);
      document.body.style.setProperty("--y", y);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Home />;
}

export default App;
