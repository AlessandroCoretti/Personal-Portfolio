function About() {
  return (
    <section id="about" className="flex flex-col gap-4 text-lg lg:text-base text-slate-400 font-normal leading-6">
      <p>
        Ciao! Sono uno sviluppatore <strong className="text-slate-200">Front-end</strong> appassionato di interfacce accessibili, pulite e ad alte prestazioni.
        Mi piace lavorare nel punto d'incontro tra design e sviluppo, dove l’estetica incontra la funzionalità per creare esperienze intuitive e ben progettate.
      </p>
      <p>
        Dopo aver completato un percorso formativo con{" "}
        <a href="https://epicode.com/it/" target="_blank" rel="noopener noreferrer">
          <strong className="text-slate-200">EPICODE</strong>
        </a>
        , mi sono specializzato nello sviluppo di applicazioni moderne utilizzando React per il frontend e Spring Boot per il backend. Affronto ogni progetto
        con attenzione ai dettagli, cura del codice e focus sull’accessibilità e sulle performance.
      </p>
      <p>
        Amo risolvere problemi reali attraverso il codice: dalla creazione di componenti UI personalizzati alla gestione della logica di stato, fino alla
        connessione con API esterne. Credo nella scrittura di <strong className="text-slate-200">codice pulito</strong>, scalabile e orientato all’
        <strong className="text-slate-200">utente</strong>.
      </p>
      <p>
        Quando non sono al PC, mi alleno, passo tempo all'aperto con il mio cane Rocky o con la mia compagna. Altrimenti puoi star certo che mi trovi a spasso
        con la mia gilda tra le Terre proibite cercando di catturare un{" "}
        <strong className="hover:cursor-[url('/cursor/rathalos2.svg')_20_20,_pointer] text-slate-200 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l hover:from-red-500 hover:to-orange-400">
          Rathalos
        </strong>
        .
      </p>
    </section>
  );
}

export default About;
