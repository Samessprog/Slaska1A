import React from "react";
import t from "../../../../Zuzu/viteGroomer/src/assets/DALL·E 2024-10-30 19.49.17 - A realistic, square image of a dog grooming service scene for a pet grooming website. It shows a groomer carefully trimming and brushing a happy, rela.webp";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const AboutUS = () => {
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
      className="w-full flex pl-5 pr-5 mt-20 height-800 flex-col"
      id="aboutUs"
    >
      <div className="text-3xl font font-semibold mb-5">
        {" "}
        <h2> Poznaj na</h2>
      </div>
      <div className="text-center text-sm text-about w-full flex justify-center">
        <div className="w-5/12 text-about">
          accumsan turpis, in sodales enim ultricies eu. Ut eget rutrum nunc.
          Nam ante elit, tincidunt viverra quam rhoncus, fermentum volutpat
          eros.
        </div>
      </div>
      <div className="mt-16 w-full flex relative">
        <animated.div
          className="text-justify about-us-holder-content p-8 w-5/12 absolute-r48-mt-1 "
          style={styles}
        >
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
        <div className="w-5/12 about-us-img-holder" ref={ref}>
          <img src={t} alt="loading error" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
