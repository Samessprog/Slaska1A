import React from "react";
import t from "../../assets/0logo1.png";
import Slider from "react-slick";

const Brands: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000, 
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", 
    pauseOnHover: false, 
  };

  return (
    <section className="mt-20">
      <div className="brand-container">
        <Slider {...settings}>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
          <div className="brand-holder">
            <img src={t} alt="loading error" className="brand-img" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
