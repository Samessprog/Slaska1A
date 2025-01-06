import React, { Suspense } from "react";
import { PropagateLoader } from "react-spinners";

const ProductCard = ({
  img,
  short_Description,
  product_type,
  product_brand,
  product_name,
}) => {
  return (
    <div className="shadow-card">
      <div className="product-card">
        <figure>
          <Suspense
            fallback={
              <div className="product-img-loader">{<PropagateLoader />}</div>
            }
          >
            <img src={img} alt="loading err" />
          </Suspense>
          <figcaption className="text-justify product-desc pl-1 pr-1 pt-2 mb-2">
            <em className="font-semibold">{product_name}</em> -{" "}
            {short_Description}
          </figcaption>
        </figure>
      </div>
      <button className=" product-button pt-2 pb-2 w-full text-white">
        Szczegóły
      </button>
    </div>
  );
};
export default ProductCard;
