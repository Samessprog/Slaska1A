import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-holder w-full mt-20">
      <div className="">
        <div className="pb-5 pt-5 flex  w-full pl-10 pr-10 mb-5 ">
          <div className="flex flex-col text-[#AAAAB1] items-center xl:items-start w-3/12">
            <a
              className="cursor-pointer hover:text-white focus:text-white] transition ease-in-out duration-300"
              href="https://www.google.com/maps/dir//Wielka+Skotnica+3,+41-400+Mys%C5%82owice/@50.2451156,19.128079,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4716c53eb21b961b:0xe929c76059b771df!2m2!1d19.1294092!2d50.2451943?entry=ttu"
              target="_blank"
              rel="noreferrer"
              aria-label="View location on Google Maps"
            >
              <div className="flex mt-10 xl:mt-1 cursor-pointer">
                <div className="mb-3 w-12/12 flex flex-col items-center xl:items-start text-sm cursor-pointer">
                  <div className="flex items-center c cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="18px"
                      height="18px"
                      className="mr-2 mb-1 fill-[#ff0000]"
                    >
                      <path d="M 36 2 C 32.460938 2 29.292969 3.554688 27.09375 6 L 6.34375 6 C 3.960938 6 2 7.960938 2 10.34375 L 2 43.21875 C 1.984375 43.324219 1.984375 43.425781 2 43.53125 L 2 43.65625 C 2 46.039063 3.960938 48 6.34375 48 L 39.65625 48 C 42.039063 48 44 46.039063 44 43.65625 L 44 43.5625 C 44.015625 43.457031 44.015625 43.355469 44 43.25 L 44 23.4375 C 46.105469 20.632813 48 17.894531 48 14 C 48 7.382813 42.617188 2 36 2 Z M 36 4 C 41.535156 4 46 8.464844 46 14 C 46 17.414063 44.308594 19.691406 42.09375 22.625 C 39.972656 25.433594 37.476563 28.824219 36 33.9375 C 34.523438 28.824219 32.027344 25.433594 29.90625 22.625 C 29.082031 21.53125 28.308594 20.535156 27.6875 19.53125 C 27.6875 19.519531 27.6875 19.511719 27.6875 19.5 C 27.675781 19.480469 27.667969 19.457031 27.65625 19.4375 C 27.613281 19.273438 27.527344 19.121094 27.40625 19 C 26.542969 17.480469 26 15.921875 26 14 C 26 8.464844 30.464844 4 36 4 Z M 6.34375 8 L 25.625 8 C 24.597656 9.765625 24 11.8125 24 14 C 24 16.136719 24.578125 17.917969 25.4375 19.5625 L 4 40.96875 L 4 10.34375 C 4 9.042969 5.042969 8 6.34375 8 Z M 12.125 10 C 8.75 10 6 12.75 6 16.125 C 6 19.5 8.75 22.21875 12.125 22.21875 C 17.46875 22.21875 18.378906 17.414063 17.875 15.03125 L 12.125 15.03125 L 12.125 17.375 L 15.4375 17.375 C 15.003906 18.789063 13.835938 19.8125 12.125 19.8125 C 10.089844 19.8125 8.4375 18.160156 8.4375 16.125 C 8.4375 14.089844 10.089844 12.4375 12.125 12.4375 C 13.039063 12.4375 13.855469 12.761719 14.5 13.3125 L 16.21875 11.59375 C 15.132813 10.605469 13.710938 10 12.125 10 Z M 36 10 C 33.800781 10 32 11.800781 32 14 C 32 16.199219 33.800781 18 36 18 C 38.199219 18 40 16.199219 40 14 C 40 11.800781 38.199219 10 36 10 Z M 36 12 C 37.117188 12 38 12.882813 38 14 C 38 15.117188 37.117188 16 36 16 C 34.882813 16 34 15.117188 34 14 C 34 12.882813 34.882813 12 36 12 Z M 26.5 21.3125 C 27.0625 22.160156 27.648438 23.007813 28.28125 23.84375 C 28.289063 23.855469 28.304688 23.863281 28.3125 23.875 L 6.21875 45.96875 C 5.023438 45.902344 4.097656 44.976563 4.03125 43.78125 Z M 29.5 25.5 C 30.929688 27.453125 32.355469 29.621094 33.4375 32.4375 L 28 27 Z M 42 26.15625 L 42 40.96875 L 37.34375 36.34375 C 37.390625 36.261719 37.441406 36.167969 37.46875 36.09375 C 37.632813 35.660156 37.613281 35.375 37.6875 35.09375 C 38.683594 31.265625 40.3125 28.523438 42 26.15625 Z M 26.59375 28.40625 L 41.96875 43.78125 C 41.902344 44.976563 40.976563 45.902344 39.78125 45.96875 L 24.40625 30.59375 Z M 23 32 L 36.96875 46 L 9.03125 46 Z" />
                    </svg>
                    Slaska1a
                  </div>
                  <div className="mt-1 cursor-pointer">Śląska 1A/105</div>
                  <div className="mt-1 cursor-pointer">
                    41-943 Piekary Śląskie
                  </div>

                  <div className="flex flex-col items-start justify-start mt-3">
                    <div>NIP: xxx-xxx-xx-xx</div>
                    <div>REGON: xxx-xxx-xxx</div>
                  </div>
                </div>
              </div>
            </a>
            <div className="mt-3 lg:mt-5 mb-2 text-sm text-start ">
              W celu dodatkowych informacji zapraszamy do kontaktu
              telefonicznego
            </div>
          </div>
          <div className="w-2/12">
            <div>
              <header className="text-lg">
                <h2>Na skróty</h2>
              </header>
            </div>
            <ul className="text-sm text-[#AAAAB1]">
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  O firmie
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Oferta produktów
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Kontakt
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Katalogi
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Allegro
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <div>
              <header className="text-lg">
                <h2>Godziny otwarcia</h2>
              </header>
            </div>
            <ul className="text-[#AAAAB1]">
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Pon: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Wt: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Śr: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Czw: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Pt: 8 - 16
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Sobota: Nieczynne
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm">
                  Niedziela: Nieczynne
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-2/12 flex flex-col ">
            <div className="text-lg">Kontakt</div>
            <ul className="mt-3">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="mr-2 fill-[#ff0000] "
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                <div>881 386 881</div>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="mr-2 fill-[#ff0000] "
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                <div>881 386 881</div>
              </li>
              <li className="flex items-center">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="fill-[#ff0000] mr-2"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <div>JAKIŚTAMMAIL@COS.PL</div>
              </li>
            </ul>
          </div>
          <div className="w-3/12 flex flex-col items-end">
            <div className="flex flex-col w-full">
            <div>FB</div>
            <div>Allegro</div>
            <div>Mapa</div>
            </div>
            <div className="flex justify-end items-end mt-10 img-logo-holder">
              <img
                src={footerLogo}
                alt="loading err"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col privacy-holder">
        <div className="mt-2"> &reg; Slaska1a. All rights reserved.</div>
        <div className="mb-2 mt-2">
          <Link to={"https://github.com/Samessprog"} target="_blank">
            Created by Sames
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
