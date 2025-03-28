import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <section className="pt-10 xl:pt-5" id="productContext">
      <div className="text-3xl font-semibold flex w-full justify-center items-center flex-col sm:flex-row mt-16">
        <h2 className="mr-3">
          {" "}
          <em>{t("productHeader")}</em>
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
          <ProductCard id="Kolki" img={KPRFAST}>
            {t("productItem1")}
          </ProductCard>
          <ProductCard id="MocowanieTradycyjne" img={MocowanieTradycyjneLogo}>
            {t("productItem2")}
          </ProductCard>
          <ProductCard id="MocowanieRamowe" img={MocowanieRamowe}>
            {t("productItem3")}
          </ProductCard>
          <ProductCard id="MocowanieOśnieżnic" img={MocowanieOscieznic}>
            {t("productItem4")}c
          </ProductCard>
          <ProductCard id="WkretyDoDrewna" img={DoDrewna}>
            {t("productItem5")}
          </ProductCard>
          <ProductCard id="Kotwy" img={Kotwy}>
            {t("productItem6")}
          </ProductCard>
          <ProductCard id="Gwoździe" img={Gwozdzie}>
            {t("productItem7")}
          </ProductCard>
          <ProductCard id="WkrętySamowiercące" img={Samowierty}>
            {t("productItem8")}
          </ProductCard>
          <ProductCard id="WkrętyDoDachu" img={Dach}>
            {t("productItem9")}
          </ProductCard>
          <ProductCard id="Kątowniki" img={katowniki}>
            {t("productItem10")}
          </ProductCard>
          <ProductCard id="SystemGoliat" img={Goliat}>
            {t("productItem11")}
          </ProductCard>
          <ProductCard id="ŁącznikiGwintowe" img={LacznikiGwintowe}>
            {t("productItem12")}
          </ProductCard>
          <ProductCard id="Podkładki" img={Podkladki}>
            {t("productItem13")}
          </ProductCard>
          <ProductCard id="Nakrędki" img={Nakredki}>
            {t("productItem14")}
          </ProductCard>
          <ProductCard id="Blistry" img={Blistry}>
            {t("productItem15")}
          </ProductCard>
          <ProductCard id="KotwyChemiczne" img={KotwyChemiczne}>
            {t("productItem16")}
          </ProductCard>
          <ProductCard id="Konfirmaty" img={konfirmaty}>
            {t("productItem17")}
          </ProductCard>
        </div>
      </div>
    </section>
  );
};

export default ProductMain;
