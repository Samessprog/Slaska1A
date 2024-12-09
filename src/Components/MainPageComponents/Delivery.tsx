import React from "react";
import DPDLogo from "../../assets/deliveryIcons/DPD.webp";
import pocztaLogo from "../../assets/deliveryIcons/poczta.webp";
import allegroLogo from "../../assets/deliveryIcons/6lJEwSSohvBIIWNlJUU9sx-w1200-h1200.webp";
import inpostLogo from "../../assets/deliveryIcons/Inpost.webp";
import orlenLogo from "../../assets/deliveryIcons/Orlen.webp";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Delivery: React.FC = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.5)",
    config: { mass: 5, tension: 100, friction: 70 },
  });

  return (
    <section className="mt-20 md:pl-12 md:pr-12 pl-3 pr-3 pb-5 sm:pb-20">
      <div
        className="text-3xl font-semibold flex w-full justify-center items-center"
        ref={ref}
      >
        {" "}
        <em>{t("deliveryHeader")}</em>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          className="ml-5"
        >
          <path d="M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z" />
        </svg>
      </div>
      <animated.div className=" place-items-center  mt-10 sm:grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-5 gap-4 " style={props}>
        <Link
          className="delivery-icon w-11/12  flex justify-center pb-5 pt-5 mb-5 sm:mb-0"
          to="https://www.dpd.com/pl/pl/"
          target="_blank"
        >
          <div className="w-6/12  ">
            <img src={DPDLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </Link>
        <Link
          className="delivery-icon w-11/12  flex justify-center pb-5 pt-5 mb-5 sm:mb-0"
          to="https://www.poczta-polska.pl/"
          target="_blank"
        >
          <div className="w-6/12 ">
            <img src={pocztaLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </Link>
        <Link
          className="delivery-icon w-11/12  flex justify-center pb-5 pt-5 mb-5 sm:mb-0"
          to="https://allegro.pl/kampania/one/kurier"
          target="_blank"
        >
          <div className="w-6/12 ">
            <img
              src={allegroLogo}
              alt="Loading Err"
              className="w-full h-full"
            />
          </div>
        </Link>
        <Link
          className="delivery-icon w-11/12  flex justify-center pb-5 pt-5 mb-5 sm:mb-0"
          to="https://inpost.pl/"
          target="_blank"
        >
          <div className="w-6/12 ">
            <img src={inpostLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </Link>
        <Link
          className="delivery-icon w-11/12  flex justify-center pb-5 pt-5 mb-5 sm:mb-0"
          to="https://www.orlenpaczka.pl/automaty-paczkowe/"
          target="_blank"
        >
          <div className="w-6/12 ">
            <img src={orlenLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </Link>
      </animated.div>
    </section>
  );
};

export default Delivery;
