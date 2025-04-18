import epibook from "../../../assets/Logo/image/Epibook.png";

function EpiBook() {
  return (
    <section>
      <a
        href="https://epi-book-library.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-4 text-base text-slate-400 font-normal leading-6"
      >
        <ul>
          <li className="mb-12">
            <div className="grid grid-cols-8 gap-2 !items-top hover:bg-slate-800/50 hover:p-2 hover:rounded hover:scale-[1.05] transition-all duration-300 easein-out ">
              <div className="col-span-8 lg:col-span-2 order-2 lg:order-1">
                <figure className=" lg:w-full lg:h-[80px] ">
                  <img src={epibook} alt="" className="h-full w-full" />
                  <figcaption className="sr-only">Epibook cover image</figcaption>
                </figure>
              </div>
              <div className="col-span-8 lg:col-span-6 order-1 lg:order-2">
                <div className="flex items-center text-slate-200 font-bold text-lg gap-2 hover:text-emerald-300 duration-200 ese-in">
                  <h3>Epi-Book</h3>
                  <span className="hidden lg:block"> - </span>
                  <div>EPI-BOOK</div>
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
                    Piccola libreria che ricava i propri libri da un JSON interno, è uno dei primi approcci avuti con chiamate interne di una fake API inquanto
                    ancora non presenti chiamate HTTP esterne.
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

export default EpiBook;
