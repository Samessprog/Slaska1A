import React from "react";
import t from "../../assets/0logo1.png";

const BrandContext: React.FC = () => {
  return (
    <div className="brand-holder rounded-md cursor-pointer">
      <img src={t} alt="loading error" className="brand-img" />
    </div>
  );
};

export default BrandContext;
