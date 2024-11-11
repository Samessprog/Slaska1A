import React from "react";

interface SliderPhotosInterface {
  elm: string;
}


const SliderPhotos: React.FC<SliderPhotosInterface> = ({ elm }) => {
  return (
    <div className="ml-3 mr-3">
      <img
        src={elm}
        alt="loading img err"
        className="w-full h-full object-cove t"
      />
    </div>
  );
};

export default SliderPhotos;
