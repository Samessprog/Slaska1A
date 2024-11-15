import React from "react";
import MainSlider from "../Components/MainPageComponents/MainSlider";
import ProductMain from "../Components/MainPageComponents/ProductMain";
import AboutUS from "../Components/MainPageComponents/AboutUs";

const Main: React.FC = () => {
  return (
    <>
      <MainSlider />
      <AboutUS />
      <ProductMain />
      ZAPEŁNIACZ Z MARKAMI statystyki (wykres)
      <section className="mt-10 w-full pl-5 pr-5">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Znajdz nas</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.6885459498685!2d18.961002176863456!3d50.39100429164183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d22b02ad9311%3A0x78c0e051751a9ef2!2s%C5%9Al%C4%85ska1a%20-%20Sklep%20metalowy%20z%20wkr%C4%99tami%2C%20narz%C4%99dziami%20i%20artyku%C5%82ami%20metalowymi!5e0!3m2!1spl!2spl!4v1731683503912!5m2!1spl!2spl"
          width="600"
          height="450"
          className="w-full"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Main;
