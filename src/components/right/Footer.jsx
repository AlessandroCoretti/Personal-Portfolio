function Footer() {
  return (
    <p className="text-slate-600 text-sm w-[100%] mb-10 lg:mb-0  lg:w-[75%]">
      Prototipato con{" "}
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Figma</strong>
      </a>
      , codice scritto con{" "}
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Visual Studio Code</strong>
      </a>
      . Costruito con{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Next.js</strong>
      </a>{" "}
      e{" "}
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Tailwind CSS</strong>
      </a>
      , hostato con{" "}
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Vercel</strong>
      </a>
      . Tutto il testo ha usato come font{" "}
      <a href="https://fonts.google.com/specimen/Nunito" target="_blank" rel="noopener noreferrer">
        <strong className="text-slate-400 hover:text-emerald-300">Nunito</strong>
      </a>
      .
    </p>
  );
}

export default Footer;
