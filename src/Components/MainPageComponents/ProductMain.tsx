import React from "react";
import ProductCard from "./ProductCard";

//products icons
import KPRFAST from "../../assets/4ikonanew2.webp";
import MocowanieTradycyjneLogo from "../../assets/productIcons/SystemInstalacyjny.webp";
import MocowanieRamowe from "../../assets/productIcons/MocowaniaTradycyjne.webp";
import MocowanieOscieznic from "../../assets/productIcons/Koszulki.webp";
import DoDrewna from "../../assets/productIcons/Dodrewnawebp.webp";
import Kotwy from "../../assets/productIcons/Kotwy.webp";
import KotwyChemiczne from "../../assets/productIcons/KotwyCHemiczne.webp";
import Gwozdzie from "../../assets/productIcons/Gwozdzie.webp";
import Samowierty from "../../assets/productIcons/WkretySamoWierty.webp";
import Dach from "../../assets/productIcons/Dachy.webp";
import katowniki from "../../assets/productIcons/Katowniki.webp";
import Goliat from "../../assets/productIcons/Goliat.webp";
import LacznikiGwintowe from "../../assets/productIcons/LacznikiGwintowe.webp";
import Blistry from "../../assets/productIcons/Blistry.webp";
import Podkladki from "../../assets/productIcons/Podkladki.webp";
import Nakredki from "../../assets/productIcons/Nakredki.webp";
import konfirmaty from "../../assets/productIcons/Konfirmaty.webp";

const ProductMain: React.FC = () => {
  return (
    <section className="pt-10 xl:pt-5" id="productContext">
      <div className="text-3xl font-semibold flex w-full justify-center items-center flex-col sm:flex-row mt-16">
        <h2 className="mr-3">
          {" "}
          <em>Zapoznaj się z naszymi produktamia</em>{" "}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="undefined"
          className="mt-2 sm:mt-0"
        >
          <path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
        </svg>
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-4 pl-2 pr-6 mt-10">
          <ProductCard img={KPRFAST}>Kołki szybkiego montażu</ProductCard>
          <ProductCard img={MocowanieTradycyjneLogo}>
            Mocowanie tradycyjne
          </ProductCard>
          <ProductCard img={MocowanieRamowe}>Mocowanie ramowe</ProductCard>
          <ProductCard img={MocowanieOscieznic}>
            Mocowanie osnieznic
          </ProductCard>
          <ProductCard img={DoDrewna}>Wkręty do drewna</ProductCard>
          <ProductCard img={Kotwy}>Kotwy</ProductCard>
          <ProductCard img={Gwozdzie}>Gwozdzie</ProductCard>
          <ProductCard img={Samowierty}>Wkręty samowiercące</ProductCard>
          <ProductCard img={Dach}>Wkręty do dachu</ProductCard>
          <ProductCard img={katowniki}>Złącza ciesielskie</ProductCard>
          <ProductCard img={Goliat}>System Goliat</ProductCard>
          <ProductCard img={LacznikiGwintowe}>Łączniuki gwintowe</ProductCard>
          <ProductCard img={Podkladki}>Podkładki</ProductCard>
          <ProductCard img={Nakredki}>Nakrętki</ProductCard>
          <ProductCard img={Blistry}>Blistry</ProductCard>
          <ProductCard img={KotwyChemiczne}>Kotwy Chemiczne</ProductCard>
          <ProductCard img={konfirmaty}>konfirmaty</ProductCard>
        </div>
      </div>
    </section>
  );
};

export default ProductMain;
