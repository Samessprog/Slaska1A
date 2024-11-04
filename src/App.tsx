import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./GeneralComponents/Navbar";
import Footer from "./GeneralComponents/Footer";

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

  return (
    <>
      <Navbar currentWindowWith={currentWindowWith} />

      <Footer />
    </>
  );
}

export default App;
