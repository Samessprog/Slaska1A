import React from "react";
import DPDLogo from "../../assets/deliveryIcons/DPD.png";
import pocztaLogo from "../../assets/deliveryIcons/poczta.png";
import allegroLogo from "../../assets/deliveryIcons/6lJEwSSohvBIIWNlJUU9sx-w1200-h1200.png";
import inpostLogo from "../../assets/deliveryIcons/Inpost.png";
import orlenLogo from "../../assets/deliveryIcons/Orlen.png";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Delivery: React.FC = () => {
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
    <section className="mt-20 pl-12 pr-12 pb-20">
      <div
        className="text-3xl font-semibold flex w-full justify-center items-center"
        ref={ref}
      >
        {" "}
        <em>Sposoby dostawy</em>
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
      <animated.div className="flex justify-around mt-10" style={props}>
        <div className="delivery-icon w-2/12 flex justify-center pb-5 pt-5">
          <div className="w-6/12  ">
            <img src={DPDLogo} alt="Loading Err" className="w-full h-full ke" />
          </div>
        </div>
        <div className="delivery-icon w-2/12 flex justify-center pb-5 pt-5">
          <div className="w-6/12 ">
            <img src={pocztaLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </div>
        <div className="delivery-icon w-2/12 flex justify-center pb-5 pt-5">
          <div className="w-6/12 ">
            <img
              src={allegroLogo}
              alt="Loading Err"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="delivery-icon w-2/12 flex justify-center pb-5 pt-5">
          <div className="w-6/12 ">
            <img src={inpostLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </div>
        <div className="delivery-icon w-2/12 flex justify-center pb-5 pt-5">
          <div className="w-6/12 ">
            <img src={orlenLogo} alt="Loading Err" className="w-full h-full" />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default Delivery;
