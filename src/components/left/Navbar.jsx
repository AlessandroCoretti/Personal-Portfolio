import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible && mostVisible.target.id !== activeSection) {
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="w-max">
        {[
          { id: "about", label: t("nav_about") },
          { id: "experience", label: t("nav_experiences") },
          { id: "projects", label: t("nav_projects") },
        ].map((section) => (
          <>
            <li key={section.id}>
              <a href={`#${section.id}`} className="group flex items-center py-3 ">
                <span
                  className={`nav-indicator mr-4 h-px  transition-all motion-reduce:transition-none ${
                    activeSection === section.id ? "w-16 bg-slate-200" : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  } `}
                ></span>
                <span
                  className={`nav-text text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeSection === section.id ? "text-slate-200" : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
