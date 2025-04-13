import Tecnologies from "./Tecnologies";

function Experience() {
  return (
    <section id="experience">
      <ol>
        <li className="mb-12">
          <div className="grid grid-cols-8  !items-top hover:bg-slate-800/50 hover:p-2 hover:rounded hover:scale-[1.05] transition-all duration-300 easein-out ">
            <div className="col-span-8 lg:col-span-2 mb-3 lg:mb-0">
              <header className="uppercase !text-slate-300 text-xs font-bold mt-1">2024 - oggi</header>
            </div>
            <div className="col-span-8 lg:col-span-6">
              <div className="flex items-center text-slate-200 font-bold text-lg gap-2 hover:text-emerald-300 duration-200 ese-in">
                <h3>Esperienza con Epicode</h3>
                <span className="hidden lg:block"> - </span>
                <div>EPICODE</div>
                <a href="https://epicode.com/it/" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#E2E8F0"
                    className="bi bi-box-arrow-up-right hover:fill-emerald-300 duration-200 ese-in"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
              <section className="text-slate-400 text-md lg:text-sm font-medium mt-2">
                <p>
                  Un'esperienza formativa completa, vissuta passo dopo passo con lo studio e l'apprendimento continuo. In questo percorso ho acquisito
                  competenze fondamentali nello sviluppo di componenti sia front-end che back-end. Il lavoro di squadra, affrontato attraverso progetti
                  concreti, mi ha permesso di sviluppare soft skill come la comunicazione, la collaborazione e la gestione del tempo, fondamentali per lavorare
                  in team in modo efficace.
                </p>
              </section>
            </div>
          </div>
        </li>
      </ol>
      <footer>
        <a href="/CurriculumVitae/Cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="visualizza cv di Alessandro Coretti" className="block w-fit">
          <div className="uppercase w-fit my-12 flex text-slate-200 text-sm items-top gap-1 hover:text-emerald-300  hover:scale-[1.05] transition-all duration-200 ease-in-out">
            <p>Vedi il resoconto completo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#E2E8F0"
              className="bi bi-box-arrow-up-right hover:fill-emerald-300"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
            </svg>
          </div>
        </a>
      </footer>
      <Tecnologies />
    </section>
  );
}

export default Experience;
