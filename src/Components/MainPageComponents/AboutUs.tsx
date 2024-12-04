import React from "react";
import tt from "../../../../Zuzu/viteGroomer/src/assets/DALL·E 2024-10-30 19.49.17 - A realistic, square image of a dog grooming service scene for a pet grooming website. It shows a groomer carefully trimming and brushing a happy, rela.webp";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import i18n from "./../../i18n";
import { useTranslation } from "react-i18next";

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
          <h1>{t("title")}</h1>
        </h2>
      </div>
      <div className="text-center text-sm text-about w-full flex justify-center">
        <div className="w-full md:w-5/12 text-about">
          accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum nunc.
          Nam ante elit, tincidunt viverra quam rhoncus, fermentum volutpat
          eros.
        </div>
      </div>
      <div className="mt-16 w-full flex xl:relative flex-col">
        <animated.div className="text-justify about-us-holder-content p-8 w-full xl:w-5/12 absolute-r48-mt-1 xl:absolute order-2 xl:order-1" style={styles}>
          <h3 className="mb-5 text-2xl">
            Jesteśmy tu by poagać! Zapoznaj się z nami
          </h3>
          <p className="mb-5 text-about">
            accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum nunc.
            Nam ante elit, tincidunt viverra quam rhoncus, fermentum volutpat
            eros.accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum
            nunc. Nam ante elit, tincidunt viverra quam rhoncus, fermentum
          </p>
          <p className="mb-5 text-about ">
            accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum nunc.
            Nam ante elit, tincidunt viverra quam rhoncus, fermentum volutpat
            eros.accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum
            nunc. Nam ante elit, tincidunt viverra quam rhoncus, fermentum
          </p>
          <p className="text-about ">
            accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum nunc.
            Nam ante elit, tincidunt viverra quam rhoncus, fermentum volutpat
            eros.accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum
            nunc. Nam ante elit, tincidunt viverra quam rhoncus, fermentum
          </p>
        </animated.div>
        <div
          className="w-12/12 xl:w-5/12 about-us-img-holder xl:absolute order-1 xl:order-2 flex justify-center"
          ref={ref}
        >
          <img
            src={tt}
            alt="loading error"
            className="xl:w-full h-full lg:w-8/12 md:w-10/12 w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
