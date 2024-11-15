import React from "react";
import ProductCard from "./ProductCard";
import test from "../../assets/4ikonanew2.webp";

const ProductMain: React.FC = () => {
  return (
    <section className="pt-20">
      <div className="text-3xl font-semibold ">
        <h2>Zapoznaj się z naszymi produktamia</h2>
      </div>
      <div className="w-full flex flex-wrap pl-2 pr-2 justify-center mt-10">
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
        <ProductCard img={test}>Kołki szybkiego montażu</ProductCard>
      </div>
    </section>
  );
};

export default ProductMain;
