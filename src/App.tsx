import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./GeneralComponents/Navbar";
import Footer from "./GeneralComponents/Footer";
import Main from "./Pages/Mian";
import { Link } from "react-router-dom";

function App() {
  let [currentWindowWith, setCurrentWindowWith] = useState<number>(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentWindowWith(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
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
      <Main />
      <div className="flex flex-col">
        {" "}
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
        Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
      </div>
      {isVisible && (
        <Link
          to="#"
          onClick={scrollToTop}
          className={`arrow-up-page mr-5  ${isVisible ? "visible" : "none"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
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
