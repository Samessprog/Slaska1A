import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./GeneralComponents/Navbar";
import Footer from "./GeneralComponents/Footer";
import Main from "./Pages/Mian";
import Products from "./Pages/Products";
import { Link, Route, Routes } from "react-router-dom";
import "./i18n";

function App() {
  const [currentWindowWith, setCurrentWindowWith] = useState<number>(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = (): void => {
      setCurrentWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar currentWindowWith={currentWindowWith} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Produkty/:id" element={<Products />} />
        <Route path="*" element={<Main />} />
      </Routes>

      {isVisible && (
        <Link
          to="#"
          onClick={scrollToTop}
          className={`arrow-up-page mr-5 fixed right-0 ${
            isVisible ? "visible" : "none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="undefined"
            className="arrow-icon"
          >
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
          </svg>
        </Link>
      )}

      <Footer />
    </>
  );
}

export default App;
