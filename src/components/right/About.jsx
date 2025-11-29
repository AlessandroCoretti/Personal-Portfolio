import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="flex flex-col gap-4 text-lg lg:text-base text-slate-400 font-normal leading-6">
      <p>{t("about_p1")}</p>
      <p>
        {t("about_p2")}{" "}
        <a href="https://epicode.com/it/" target="_blank" rel="noopener noreferrer">
          <strong className="text-slate-200">EPICODE</strong>
        </a>
        {t("about_p2_b")}
      </p>
      <p>{t("about_p3")}</p>
      <p>
        {t("about_p4")}{" "}
        <strong className="hover:cursor-[url('/cursor/rathalos2.svg')_20_20,_pointer] text-slate-200 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-red-500 hover:to-orange-400">
          Rathalos
        </strong>
        .
      </p>
    </section>
  );
}

export default About;
