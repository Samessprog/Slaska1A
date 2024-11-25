import React from "react";
import MainSlider from "../Components/MainPageComponents/MainSlider";
import ProductMain from "../Components/MainPageComponents/ProductMain";
import AboutUS from "../Components/MainPageComponents/AboutUs";
import Brands from "../Components/MainPageComponents/Brands";
import BarChart from "../Components/MainPageComponents/Chart";
import Delivery from "../Components/MainPageComponents/Delivery";

const Main: React.FC = () => {
  return (
    <>
      <MainSlider />
      <AboutUS />
      <ProductMain />
      <Brands />
      <BarChart />
      <section className="mt-10 w-full pl-5 pr-5">
        <div className="mb-10 flex justify-center">
          <h2 className="text-3xl font-semibold">
            {" "}
            <em>Znajdz nas</em>
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            className="ml-3"
          >
            <path d="M440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560ZM884-20 756-148q-21 12-45 20t-51 8q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 27-8 51t-20 45L940-76l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-540 40v-111q0-34 17-63t47-44q51-26 115-44t142-18q-12 18-20.5 38.5T407-359q-60 5-107 20.5T221-306q-10 5-15.5 14.5T200-271v31h207q5 22 13.5 42t20.5 38H120Zm320-480Zm-33 400Z" />
          </svg>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.6885459498685!2d18.961002176863456!3d50.39100429164183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d22b02ad9311%3A0x78c0e051751a9ef2!2s%C5%9Al%C4%85ska1a%20-%20Sklep%20metalowy%20z%20wkr%C4%99tami%2C%20narz%C4%99dziami%20i%20artyku%C5%82ami%20metalowymi!5e0!3m2!1spl!2spl!4v1731683503912!5m2!1spl!2spl"
          height="550"
          className="w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Delivery />
    </>
  );
};

export default Main;
