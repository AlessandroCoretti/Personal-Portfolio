import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function LanguagesSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "it");

  const toggleLanguage = () => {
    const newLang = lang === "it" ? "en" : "it";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="relative self-end lg:self-start w-16 h-8 bg-slate-700 rounded-full cursor-pointer select-none" onClick={toggleLanguage}>
      {/* Slider interno */}
      <div
        className={`absolute top-0.5 left-0.5 w-7 h-7 bg-emerald-400 rounded-full shadow-md transform transition-transform duration-300 ${
          lang === "en" ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>

      {/* Testo IT / EN */}
      <span className="absolute left-3 top-2 text-xs font-bold text-slate-200">IT</span>
      <span className="absolute right-3 top-2 text-xs font-bold text-slate-200">EN</span>
    </div>
  );
}

export default LanguagesSwitcher;
