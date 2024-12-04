import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  img: string;
  children: ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, children }) => {
  return (
    <Link className="product-container w-full p-6 flex items-center mb-3 ml-2 mr-2">
      <img src={img} alt="loading err" />
      <div className="text-lg ml-3 text-center w-full">{children}</div>
    </Link>
  );
};

export default ProductCard;
