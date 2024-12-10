import React from "react";

const BrandContext: React.FC = ({ logoImg }) => {
  return (
    <div className="brand-holder rounded-md cursor-pointer">
      <div>
        <img
          src={logoImg}
          alt="loading error"
          loading="lazy"
          className="brand-img w-full h-full"
        />
      </div>
    </div>
  );
};

export default BrandContext;
