import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  img: string;
  children: ReactNode;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, children, id }) => {
  return (
    <Link
      to={`/Produkty/${id}`}
      className="product-container w-full p-6 flex items-center mb-3 ml-2 mr-2"
    >
      <div>
        <img src={img} alt="loading err" className="w-full h-full" />
      </div>
      <div className="text-lg ml-3 text-center w-full">{children}</div>
    </Link>
  );
};

export default ProductCard;
