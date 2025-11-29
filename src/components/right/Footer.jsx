import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return <p className="text-slate-600 text-xs lg:text-sm w-[100%] mb-10 lg:mb-0  lg:w-[75%]">{t("footer")}</p>;
}

export default Footer;
