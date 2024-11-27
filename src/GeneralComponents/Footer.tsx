import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="footer-holder w-full text-white" id="footer">
      <div className="xl:pt-10">
        <div className="pb-5 pt-5 flex w-full pl-5 pr-5 sm:pl-10 sm:pr-10 mb-5 flex-col xl:flex-row">
          <div className="flex flex-col text-[#AAAAB1] items-center xl:items-start xl:w-3/12 ">
            <Link
              className="cursor-pointer hover:text-white focus:text-white] transition ease-in-out duration-300"
              to="https://www.google.com/maps/dir//Wielka+Skotnica+3,+41-400+Mys%C5%82owice/@50.2451156,19.128079,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4716c53eb21b961b:0xe929c76059b771df!2m2!1d19.1294092!2d50.2451943?entry=ttu"
              target="_blank"
              rel="noreferrer"
              aria-label="View location on Google Maps"
            >
              <div className="flex mt-10 xl:mt-1 cursor-pointer">
                <div className="mb-3 w-12/12 flex flex-col items-center xl:items-start cursor-pointer text-xs sm:text-lg xl:text-xs">
                  <div className="flex items-center c cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="18px"
                      height="18px"
                      className="mr-2 mb-1 fill-[#ffffff]"
                    >
                      <path d="M 36 2 C 32.460938 2 29.292969 3.554688 27.09375 6 L 6.34375 6 C 3.960938 6 2 7.960938 2 10.34375 L 2 43.21875 C 1.984375 43.324219 1.984375 43.425781 2 43.53125 L 2 43.65625 C 2 46.039063 3.960938 48 6.34375 48 L 39.65625 48 C 42.039063 48 44 46.039063 44 43.65625 L 44 43.5625 C 44.015625 43.457031 44.015625 43.355469 44 43.25 L 44 23.4375 C 46.105469 20.632813 48 17.894531 48 14 C 48 7.382813 42.617188 2 36 2 Z M 36 4 C 41.535156 4 46 8.464844 46 14 C 46 17.414063 44.308594 19.691406 42.09375 22.625 C 39.972656 25.433594 37.476563 28.824219 36 33.9375 C 34.523438 28.824219 32.027344 25.433594 29.90625 22.625 C 29.082031 21.53125 28.308594 20.535156 27.6875 19.53125 C 27.6875 19.519531 27.6875 19.511719 27.6875 19.5 C 27.675781 19.480469 27.667969 19.457031 27.65625 19.4375 C 27.613281 19.273438 27.527344 19.121094 27.40625 19 C 26.542969 17.480469 26 15.921875 26 14 C 26 8.464844 30.464844 4 36 4 Z M 6.34375 8 L 25.625 8 C 24.597656 9.765625 24 11.8125 24 14 C 24 16.136719 24.578125 17.917969 25.4375 19.5625 L 4 40.96875 L 4 10.34375 C 4 9.042969 5.042969 8 6.34375 8 Z M 12.125 10 C 8.75 10 6 12.75 6 16.125 C 6 19.5 8.75 22.21875 12.125 22.21875 C 17.46875 22.21875 18.378906 17.414063 17.875 15.03125 L 12.125 15.03125 L 12.125 17.375 L 15.4375 17.375 C 15.003906 18.789063 13.835938 19.8125 12.125 19.8125 C 10.089844 19.8125 8.4375 18.160156 8.4375 16.125 C 8.4375 14.089844 10.089844 12.4375 12.125 12.4375 C 13.039063 12.4375 13.855469 12.761719 14.5 13.3125 L 16.21875 11.59375 C 15.132813 10.605469 13.710938 10 12.125 10 Z M 36 10 C 33.800781 10 32 11.800781 32 14 C 32 16.199219 33.800781 18 36 18 C 38.199219 18 40 16.199219 40 14 C 40 11.800781 38.199219 10 36 10 Z M 36 12 C 37.117188 12 38 12.882813 38 14 C 38 15.117188 37.117188 16 36 16 C 34.882813 16 34 15.117188 34 14 C 34 12.882813 34.882813 12 36 12 Z M 26.5 21.3125 C 27.0625 22.160156 27.648438 23.007813 28.28125 23.84375 C 28.289063 23.855469 28.304688 23.863281 28.3125 23.875 L 6.21875 45.96875 C 5.023438 45.902344 4.097656 44.976563 4.03125 43.78125 Z M 29.5 25.5 C 30.929688 27.453125 32.355469 29.621094 33.4375 32.4375 L 28 27 Z M 42 26.15625 L 42 40.96875 L 37.34375 36.34375 C 37.390625 36.261719 37.441406 36.167969 37.46875 36.09375 C 37.632813 35.660156 37.613281 35.375 37.6875 35.09375 C 38.683594 31.265625 40.3125 28.523438 42 26.15625 Z M 26.59375 28.40625 L 41.96875 43.78125 C 41.902344 44.976563 40.976563 45.902344 39.78125 45.96875 L 24.40625 30.59375 Z M 23 32 L 36.96875 46 L 9.03125 46 Z" />
                    </svg>
                    Slaska1a
                  </div>
                  <div className="mt-1 cursor-pointer">Śląska 1A/105</div>
                  <div className="mt-1 cursor-pointer">
                    41-943 Piekary Śląskie
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex flex-col items-start justify-start text-sm ">
              <div>NIP: xxx-xxx-xx-xx</div>
              <div>REGON: xxx-xxx-xxx</div>
            </div>
            <div className="mt-3 lg:mt-5 mb-2 text-xs sm:text-lg xl:text-xs text-start ">
              W celu dodatkowych informacji zapraszamy do kontaktu
              telefonicznego
            </div>
          </div>
          <div className="xl:w-2/12 pt-5 xl:pt-0">
            <div>
              <header className="text-base sm:text-2xl xl:text-base">
                <h2>Na skróty</h2>
              </header>
            </div>
            <ul className="text-sm text-[#AAAAB1]">
              <li className="mt-2">
                <a
                  href="#productContext"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm sm:xs-md xl:text-xs"
                >
                  Oferta produktów
                </a>
              </li>
              <li className="mt-2">
                <Link
                  to="https://slaska1a.pl/"
                  target="_blank"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm sm:xs-md xl:text-xs"
                >
                  Sklep
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="https://allegro.pl/uzytkownik/Elektrokoncept"
                  target="_blank"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm sm:xs-md xl:text-xs"
                >
                  Allego
                </Link>
              </li>
              <li className="mt-2">
                <a
                  href="#aboutUs"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs"
                >
                  O nas
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#footer"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs"
                >
                  Kontakt
                </a>
              </li>
              <li className="mt-2">
                <Link
                  to="https://allegro.pl/uzytkownik/Elektrokoncept"
                  target="_blank"
                  className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs"
                >
                  Allegro
                </Link>
              </li>
            </ul>
          </div>
          <div className="xl:w-2/12 pt-5 xl:pt-0">
            <div>
              <header className="text-base sm:text-2xl xl:text-base">
                <h2>Godziny otwarcia</h2>
              </header>
            </div>
            <ul className="text-[#AAAAB1] mt-2">
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs">
                  Pon: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs">
                  Wt: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs">
                  Śr: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 sm:xs-md xl:text-xs">
                  Czw: 8 - 16
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300  text-sm sm:xs-md xl:text-xs">
                  Pt: 8 - 16
                </Link>
              </li>
              <li className="mt-2">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300  text-sm sm:xs-md xl:text-xs">
                  Sobota: Nieczynne
                </Link>
              </li>
              <li className="mt-1">
                <Link className="mb-2 hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm sm:xs-md xl:text-xs">
                  Niedziela: Nieczynne
                </Link>
              </li>
            </ul>
          </div>
          <div className="xl:w-2/12 flex flex-col xl:items-start items-center pt-5 xl:pt-0">
            <div className="text-lg">
              <header className="text-base sm:text-2xl xl:text-base">
                <h2>Kontakt</h2>
              </header>
            </div>
            <ul className="mt-3 text-[#AAAAB1]">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="mr-2 fill-[#ffffff] "
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                <div className="hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300 text-sm md:text-base xl:text-sm">
                  881 386 881
                </div>
              </li>
              <li className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="mr-2 fill-[#ffffff] "
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
                <div className="hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300  text-sm md:text-base xl:text-sm">
                  881 386 881
                </div>
              </li>
              <li className="flex items-center mt-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  viewBox="0 -960 960 960"
                  width="19"
                  className="fill-[#ffffff] mr-2"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <div className="hover:text-white focus:text-white  cursor-pointer transition ease-in-out duration-300  text-sm md:text-base xl:text-sm">
                  JAKIŚTAMMAIL@COS.PL
                </div>
              </li>
            </ul>
          </div>
          <div className="xl:w-3/12 flex flex-col items-end pt-10 xl:pt-0">
            <div className="flex w-full justify-center items-center flex-col xl:flex-row">
              <div className="flex mb-10 ">
                <Link>
                  <div className="flex justify-center mr-5 footer-icon-border footer-icon-holder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="25px"
                      height="25px"
                      className="fill-[#AAAAB1] footer-icon"
                      role="img"
                      aria-labelledby="facebook-icon"
                    >
                      {" "}
                      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                    </svg>
                  </div>
                </Link>

                <Link>
                  <div className="flex justify-center mr-5 footer-icon-border footer-icon-holder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25px"
                      viewBox="0 -960 960 960"
                      width="25px"
                      className="fill-[#AAAAB1] footer-icon"
                    >
                      <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" />
                    </svg>
                  </div>
                </Link>
                <Link>
                  <div className="flex justify-center mr-5 footer-icon-border footer-icon-holder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="25px"
                      height="25px"
                      className="fill-[#AAAAB1] footer-icon"
                    >
                      <path d="M 36 2 C 32.460938 2 29.292969 3.554688 27.09375 6 L 6.34375 6 C 3.960938 6 2 7.960938 2 10.34375 L 2 43.21875 C 1.984375 43.324219 1.984375 43.425781 2 43.53125 L 2 43.65625 C 2 46.039063 3.960938 48 6.34375 48 L 39.65625 48 C 42.039063 48 44 46.039063 44 43.65625 L 44 43.5625 C 44.015625 43.457031 44.015625 43.355469 44 43.25 L 44 23.4375 C 46.105469 20.632813 48 17.894531 48 14 C 48 7.382813 42.617188 2 36 2 Z M 36 4 C 41.535156 4 46 8.464844 46 14 C 46 17.414063 44.308594 19.691406 42.09375 22.625 C 39.972656 25.433594 37.476563 28.824219 36 33.9375 C 34.523438 28.824219 32.027344 25.433594 29.90625 22.625 C 29.082031 21.53125 28.308594 20.535156 27.6875 19.53125 C 27.6875 19.519531 27.6875 19.511719 27.6875 19.5 C 27.675781 19.480469 27.667969 19.457031 27.65625 19.4375 C 27.613281 19.273438 27.527344 19.121094 27.40625 19 C 26.542969 17.480469 26 15.921875 26 14 C 26 8.464844 30.464844 4 36 4 Z M 6.34375 8 L 25.625 8 C 24.597656 9.765625 24 11.8125 24 14 C 24 16.136719 24.578125 17.917969 25.4375 19.5625 L 4 40.96875 L 4 10.34375 C 4 9.042969 5.042969 8 6.34375 8 Z M 12.125 10 C 8.75 10 6 12.75 6 16.125 C 6 19.5 8.75 22.21875 12.125 22.21875 C 17.46875 22.21875 18.378906 17.414063 17.875 15.03125 L 12.125 15.03125 L 12.125 17.375 L 15.4375 17.375 C 15.003906 18.789063 13.835938 19.8125 12.125 19.8125 C 10.089844 19.8125 8.4375 18.160156 8.4375 16.125 C 8.4375 14.089844 10.089844 12.4375 12.125 12.4375 C 13.039063 12.4375 13.855469 12.761719 14.5 13.3125 L 16.21875 11.59375 C 15.132813 10.605469 13.710938 10 12.125 10 Z M 36 10 C 33.800781 10 32 11.800781 32 14 C 32 16.199219 33.800781 18 36 18 C 38.199219 18 40 16.199219 40 14 C 40 11.800781 38.199219 10 36 10 Z M 36 12 C 37.117188 12 38 12.882813 38 14 C 38 15.117188 37.117188 16 36 16 C 34.882813 16 34 15.117188 34 14 C 34 12.882813 34.882813 12 36 12 Z M 26.5 21.3125 C 27.0625 22.160156 27.648438 23.007813 28.28125 23.84375 C 28.289063 23.855469 28.304688 23.863281 28.3125 23.875 L 6.21875 45.96875 C 5.023438 45.902344 4.097656 44.976563 4.03125 43.78125 Z M 29.5 25.5 C 30.929688 27.453125 32.355469 29.621094 33.4375 32.4375 L 28 27 Z M 42 26.15625 L 42 40.96875 L 37.34375 36.34375 C 37.390625 36.261719 37.441406 36.167969 37.46875 36.09375 C 37.632813 35.660156 37.613281 35.375 37.6875 35.09375 C 38.683594 31.265625 40.3125 28.523438 42 26.15625 Z M 26.59375 28.40625 L 41.96875 43.78125 C 41.902344 44.976563 40.976563 45.902344 39.78125 45.96875 L 24.40625 30.59375 Z M 23 32 L 36.96875 46 L 9.03125 46 Z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className=" flex justify-center allegro-icon h-full mt-4">
                <Link>
                  <svg
                    className="w-[130px] h-[45px] sm:w-[200px] sm:h-[90px] xl:w-[120px] xl:h-[40px] allegro-icon"
                    viewBox="0 0 145 50"
                    fill="#ff5a00"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M141.72 16.69a13.1 13.1 0 0 0-20.7 0 13.59 13.59 0 0 0-2.46 8 13.59 13.59 0 0 0 2.46 8 13.1 13.1 0 0 0 20.7 0 13.6 13.6 0 0 0 2.46-8 13.6 13.6 0 0 0-2.46-8zm-4.1 11c-.94 2.81-3.17 5-6.26 5.07s-5.32-2.26-6.25-5.07a9.27 9.27 0 0 1 0-6c.94-2.81 3.17-5 6.25-5.07s5.32 2.26 6.26 5.07a9.28 9.28 0 0 1 0 5.99zm-94.25 9.4a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V1.74a.74.74 0 0 1 .74-.74h4.3a.74.74 0 0 1 .74.74v35.35zm-10.1 0a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V1.74a.74.74 0 0 1 .73-.74h4.3a.74.74 0 0 1 .74.74v35.35zm84.32-24v3a.78.78 0 0 1-1 .85c-4.86-1-7.85 1.16-7.85 5.65v14.5a.74.74 0 0 1-.74.74h-4.3a.74.74 0 0 1-.74-.74V22.28a10 10 0 0 1 3.17-7.49 11.16 11.16 0 0 1 7.87-3.18 16.69 16.69 0 0 1 3 .28c.51.17.59.47.59 1.24zM99.18 24.68a13.41 13.41 0 0 0-2.46-8 13.1 13.1 0 0 0-20.7 0 14.07 14.07 0 0 0 0 16 12.73 12.73 0 0 0 10.35 5.07 13.2 13.2 0 0 0 7.37-2.22v3.16c0 4.29-3.75 5.07-6.15 5.22a28.26 28.26 0 0 1-4.94-.27c-.66-.1-1.12 0-1.12.71v3.8a.65.65 0 0 0 .68.62c5.57.48 9.32.38 12.14-1.23a9.18 9.18 0 0 0 4.11-5.23 17.49 17.49 0 0 0 .71-5.22V24.68zm-12.81 8.06c-3.09 0-5.32-2.26-6.26-5.07a9.27 9.27 0 0 1 0-6c.94-2.81 3.17-5.07 6.26-5.07 6.91 0 7.14 7.05 7.14 8.07s-.23 8.07-7.14 8.07zM23.55 22.09c0-3.41-.76-6-2.4-7.79s-4.94-2.68-8-2.68a17.34 17.34 0 0 0-8.75 2.33.55.55 0 0 0-.27.48l.23 3.76a.67.67 0 0 0 1.1.39C9.21 16.27 13.71 15.84 16 17a4 4 0 0 1 2 3.61v.55h-6.25c-2.69 0-10.93 1-10.93 8.57v.08a7.34 7.34 0 0 0 2.67 6.08 10.56 10.56 0 0 0 6.68 1.91h12.65a.74.74 0 0 0 .74-.74v-15zM18 33.18h-7.47a4.62 4.62 0 0 1-2.65-.93 2.94 2.94 0 0 1-1.25-2.46c0-1.35.91-4.05 5.46-4.05H18v7.44zm41.2-21.56c-7.65 0-11 5.13-12.07 9.47a14.58 14.58 0 0 0-.44 3.58 13.6 13.6 0 0 0 2.46 8 13.13 13.13 0 0 0 10.35 5.07c4.13.15 6.89-.55 9-1.75a1.17 1.17 0 0 0 .5-1.27v-3.33c0-.68-.41-1-1-.59a13.05 13.05 0 0 1-8.32 2A6.81 6.81 0 0 1 53 26.73h17a.7.7 0 0 0 .7-.69c.3-4.65-1.05-14.42-11.5-14.42zm-6.11 10.51a5.78 5.78 0 0 1 6.12-5.51 5.14 5.14 0 0 1 5.44 5.51H53.09z" />
                  </svg>
                </Link>
              </div>
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
      <div className="flex justify-center items-center flex-col privacy-holder text-sm">
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
