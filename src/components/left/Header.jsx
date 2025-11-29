import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1 className="text-4xl text-slate-200 font-bold mb-2">{t("hero_title")}</h1>
      <h2 className="text-2xl text-slate-200 font-semibold mb-2">{t("hero_subtitle")}</h2>
      <h3 className="text-lg text-slate-400 font-medium mb-2">{t("hero_description")}</h3>
    </header>
  );
}

export default Header;
