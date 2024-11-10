import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo.png";

interface NavbarProps {
  currentWindowWith: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentWindowWith }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Pol");
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (language: string): void => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const dropDownMenuLang = useRef();

  const handleClickOutside = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (
      dropDownMenuLang.current &&
      !dropDownMenuLang.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (currentWindowWith > 768) {
      setIsClicked(false);
      setIsOpenHamburger(false);
    }
  }, [currentWindowWith]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center navbar-holder w-full">
        <div className="w-3/12 order-2">
          <Link to="/">
            <img src={logoIcon} />
          </Link>
        </div>

        <div
          className={`hamburger-menu md:hidden order-1  ${
            isOpenHamburger ? "open" : "close"
          }`}
          onClick={() => {
            setIsOpenHamburger(!isOpenHamburger);
            setIsClicked(true);
          }}
        >
          <ul>
            <li className="hamburger-item"></li>
            <li className={`hamburger-item`}></li>
            <li className="hamburger-item"></li>
          </ul>
        </div>

        <div
          className={`w-7/12 justify-start md:flex order-2 ${
            currentWindowWith > 768
              ? ""
              : isOpenHamburger
              ? "menu-drop-open openAnimate"
              : isClicked
              ? "menu-drop-close"
              : "hidden"
          }`}
        >
          <ul className="flex justify-around w-full text-sm font-semibold cursor-pointer menu-item-list items-center flex-col md:flex-row">
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link>O firmie</Link>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link>Oferta produktów</Link>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link>Kontakt</Link>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link>Katalogi</Link>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link>Allegro</Link>
            </li>
          </ul>
        </div>

        <div className="w-2/12 order-3 ">
          <div
            className="relative inline-block text-left"
            ref={dropDownMenuLang}
          >
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
                  className="py-1 w-full flex flex-col "
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
