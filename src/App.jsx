import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

  return (
    <>
      <Helmet>
        <title>Alessandro Coretti | Frontend Developer</title>
        <meta name="description" content="Alessandro Coretti - Portfolio. Frontend Developer specializzato in React, Tailwind CSS e modern web design." />
        <meta property="og:title" content="Alessandro Coretti | Frontend Developer" />
        <meta property="og:description" content="Portfolio di Alessandro Coretti. Scopri i miei progetti e le mie competenze." />
        <meta property="og:image" content="/image/Portfolio-Logo.webp" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alessandro Coretti",
              "url": "https://alessandrocoretti.dev",
              "jobTitle": "Frontend Developer",
              "image": "/image/Portfolio-Logo.webp",
              "sameAs": [
                "https://www.linkedin.com/in/alessandro-coretti/",
                "https://github.com/AlessandroCoretti"
              ]
            }
          `}
        </script>
      </Helmet>
      <Home />
    </>
  );
}

export default App;
