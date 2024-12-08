import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo.png";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  currentWindowWith: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentWindowWith }) => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Pol");
  const [isOpenHamburger, setIsOpenHamburger] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (
    language: string,
    toTranslateLanguage: string
  ): void => {
    setSelectedLanguage(language);
    i18n.changeLanguage(toTranslateLanguage);
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
    <nav className="flex justify-center top-0 left-0 sticky">
      <div className="flex justify-between items-center navbar-holder w-full pt-2 pl-4 pr-4 pb-2 bg-white">
        <div className="w-3/12 order-2">
          <Link to="/">
            <img src={logoIcon} />
          </Link>
        </div>

        <div
          className={`hamburger-menu md:hidden order-1 w-3/12 md:w-auto  ${
            isOpenHamburger ? "open" : "close"
          }`}
          onClick={() => {
            setIsOpenHamburger(!isOpenHamburger);
            setIsClicked(true);
          }}
        >
          <ul>
            <li className="hamburger-item mt-1"></li>
            <li className={`hamburger-item mt-1`}></li>
            <li className="hamburger-item mt-1"></li>
          </ul>
        </div>

        <div
          className={`w-7/12 justify-start md:flex order-2 z-50 ${
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
              <a className="scroll-smooth" href="#productContext">
                {t("Navitem1")}
              </a>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link to="https://slaska1a.pl/" target="_blank">
                {t("Navitem2")}
              </Link>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link
                to="https://allegro.pl/uzytkownik/Elektrokoncept"
                target="_blank"
              >
                {t("Navitem3")}
              </Link>
            </li>
            <li
              className={`list-item relative  ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <a className="scroll-smooth" href="#aboutUs">
                {t("Navitem4")}
              </a>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <a href="#footer">{t("Navitem5")}</a>
            </li>
            <li
              className={`list-item relative ${
                isOpenHamburger ? "w-11/12" : ""
              }`}
            >
              <Link
                to="https://slaska1a.pl/pl/i/Regulamin-sklepu/18"
                target="_blank"
              >
                {t("Navitem6")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-3/12 md:w-auto order-3 flex justify-end">
          <div
            className="relative inline-block text-left"
            ref={dropDownMenuLang}
          >
            <div className="">
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
                    onClick={() => changeLanguage("Pol", "pl")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-gray-900"
                    role="menuitem"
                  >
                    🇵🇱 Polish (Pol)
                  </button>
                  <button
                    onClick={() => changeLanguage("Eng", "en")}
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
