import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import usCompoanyImg from "../../assets/2024.webp";

const AboutUS = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-200px)",
    config: { mass: 5, tension: 100, friction: 55 },
  });


  return (
    <section
      className="w-full flex md:pl-5 md:pr-5 pl-2 pr-2 mt-20 height-800 flex-col justify-start about-us-hlder"
      id="aboutUs"
    >
      <div className="text-3xl font font-semibold ">
        {" "}
        <h1>{t("title")}</h1>
      </div>
      <div className="text-center text-sm text-about w-full flex justify-center">
        <div className="w-full md:w-5/12 text-about">{t("starter")}</div>
      </div>
      <div className="mt-16 w-full flex xl:relative flex-col">
        <animated.div
          className="text-justify about-us-holder-content p-8 w-full xl:w-5/12 absolute-r48-mt-1 xl:absolute order-2 xl:order-1"
          style={styles}
        >
          <h2 className="mb-5 text-2xl">{t("starter2")}</h2>
          <p className="mb-5 text-about">{t("paragraph1")}</p>
          <p className="mb-5 text-about">{t("paragraph2")}</p>
          <p className="text-about">{t("paragraph3")}</p>
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
