import React, { useState } from "react";
import logoIcon from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Pol");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Zamknij dropdown po wybraniu języka
  };

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center navbar-holder w-full">
        <div className="w-4/12">
          <a>
            <img src={logoIcon} />
          </a>
        </div>
        <div className="flex w-6/12 justify-start">
          <ul className="flex justify-around w-full text-md font-semibold cursor-pointer menu-item-list ">
            <li className="list-item relative">O firmie</li>
            <li className="list-item relative">Oferta produktów</li>
            <li className="list-item relative">Kontakt</li>
            <li className="list-item relative">Katalogi</li>
            <li className="list-item relative">Allegro</li>
          </ul>
        </div>
        <div className="w-2/12">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                {selectedLanguage}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    onClick={() => changeLanguage("Pol")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-gray-900"
                    role="menuitem"
                  >
                    🇵🇱 Polish (Pol)
                  </button>
                  <button
                    onClick={() => changeLanguage("Eng")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-gray-900"
                    role="menuitem"
                  >
                    🇬🇧 English (Eng)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
