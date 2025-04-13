import freeitinerary from "../../../assets/Logo/image/Freeitinerary-img.png";

function Freeitinerary() {
  return (
    <section id="projects">
      <a href="" className="flex flex-col gap-4 text-md text-slate-400 font-normal leading-6">
        <ul>
          <li className="mb-12">
            <div className="grid grid-cols-8 gap-2 !items-top hover:bg-slate-800/50 hover:p-2 hover:rounded hover:scale-[1.05] transition-all duration-300 easein-out ">
              <div className="col-span-8 lg:col-span-2 order-2 lg:order-1">
                <figure className=" lg:w-full lg:h-[80px] ">
                  <img src={freeitinerary} alt="" className="h-full w-full" />
                  <figcaption className="sr-only">Freeitinerary cover image</figcaption>
                </figure>
              </div>
              <div className="col-span-8 lg:col-span-6 order-1 lg:order-2">
                <div className="flex items-center text-slate-200 font-bold text-lg gap-2 hover:text-emerald-300 duration-200 ese-in">
                  <h3>Sito per itinerari</h3>
                  <span className="hidden lg:block"> - </span>
                  <div>Freeitinerary</div>
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
                <section className="text-slate-400 text-sm font-medium mt-2">
                  <p>
                    Questo è il progetto fiale presentato per il mio diploma, si tratta di un sito web utile per la crezione di itinerari di viaggio, idea
                    semplice ma funzionale. Sono state utilizzate tutte le tecnologie studiate, oltre alle diverse API per voli ed hotel. Ancora in fase di
                    completamento con aggiunta di nuove funzionalità.
                  </p>
                </section>
              </div>
            </div>
          </li>
        </ul>
      </a>
    </section>
  );
}

export default Freeitinerary;
