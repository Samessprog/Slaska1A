import React from "react";

const BrandContext: React.FC = ({ logoImg }) => {
  return (
    <div className="brand-holder rounded-md cursor-pointer">
      <img src={logoImg} alt="loading error" className="brand-img" />
    </div>
  );
};

export default BrandContext;
