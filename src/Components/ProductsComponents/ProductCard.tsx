import React, { Suspense } from "react";
import { PropagateLoader } from "react-spinners";
import imgTest from "../../../../AdamSklep/KGD/Untitled-1.jpg";

const ProductCard = ({
  img,
  short_Description,
  product_type,
  product_brand,
  product_name,
}) => {
  return (
    <div className="product-card">
      <figure>
        <Suspense fallback={<div>{PropagateLoader}</div>}>
          <img src={imgTest} alt="loading err" />
        </Suspense>
        <figcaption className="text-justify product-desc pl-1 pr-1 pt-2">
          <em className="font-semibold">{product_name}</em> -{" "}
          {short_Description}
        </figcaption>
      </figure>
      <button className="mt-2 product-button pt-2 pb-2 w-full text-white">
        Szczegóły
      </button>
    </div>
  );
};
export default ProductCard;
