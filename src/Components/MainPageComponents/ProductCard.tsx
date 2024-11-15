import React, { ReactNode } from "react";

interface ProductCardProps {
  img: string;
  children: ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, children }) => {
  return (
    <div className="product-container w-2/12 p-6 flex items-center ml-2 mr-2 mb-3">
      <img src={img} alt="loading err" />
      <div className="text-lg ml-3">{children}</div>
    </div>
  );
};

export default ProductCard;
