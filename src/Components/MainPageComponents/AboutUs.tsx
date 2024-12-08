import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import i18n from "./../../i18n";
import { useTranslation } from "react-i18next";
import usCompoanyImg from "../../assets//2024.jpg";

const AboutUS = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const styles = useSpring({
    // opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-200px)",
    config: { mass: 5, tension: 100, friction: 55 },
  });

  return (
    <section
      className="w-full flex md:pl-5 md:pr-5 pl-2 pr-2 mt-20 height-800 flex-col justify-start"
      id="aboutUs"
    >
      <div className="text-3xl font font-semibold ">
        {" "}
        <h2>
          {" "}
          <h1 className="mb-2">Dowiedz się coś o nas!</h1>
        </h2>
      </div>
      <div className="text-center text-sm text-about w-full flex justify-center">
        <div className="w-full md:w-5/12 text-about">
          Jesteśmy Twoim zaufanym partnerem w budowie i remoncie. Oferujemy
          najwyższej jakości sprzęt budowlany, który sprosta każdemu wyzwaniu!
        </div>
      </div>
      <div className="mt-16 w-full flex xl:relative flex-col">
        <animated.div
          className="text-justify about-us-holder-content p-8 w-full xl:w-5/12 absolute-r48-mt-1 xl:absolute order-2 xl:order-1"
          style={styles}
        >
          <h3 className="mb-5 text-2xl">Jesteśmy tu, by pomóc!</h3>
          <p className="mb-5 text-about">
            Jako firma z kilkuletnim doświadczeniem, oferujemy szeroki wybór
            sprzętu budowlanego: kołki, śruby, kątowniki, haki, rękawice i wiele
            innych. Działamy zarówno na Allegro, jak i poprzez nasz sklep
            internetowy, zapewniając wygodny dostęp do produktów, które spełnią
            Twoje oczekiwania.
          </p>
          <p className="mb-5 text-about">
            Dzięki współpracy z renomowanymi producentami, dostarczamy narzędzia
            i akcesoria budowlane najwyższej jakości. Nasza oferta jest
            skierowana do profesjonalistów i majsterkowiczów, którzy potrzebują
            niezawodnego sprzętu do swoich projektów.
          </p>
          <p className="text-about">
            Z nami zrealizujesz każdy projekt szybko i efektywnie – zawsze
            stawiamy na jakość, szybki czas realizacji zamówienia i
            konkurencyjne ceny. Sprawdź naszą ofertę i dołącz do grona
            zadowolonych klientów!
          </p>
        </animated.div>

        <div
          className="w-12/12 xl:w-5/12 about-us-img-holder xl:absolute order-1 xl:order-2 flex justify-center items-start"
          ref={ref}
        >
          <img
            src={usCompoanyImg}
            alt="loading error"
            className="xl:w-full h-full lg:w-8/12 md:w-10/12 w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
