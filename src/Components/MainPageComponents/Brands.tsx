import React from "react";
import Slider from "react-slick";
import BrandContext from "./BrandContext";
import t from "../../assets/brandsLogos/0logo1.png";
import domaxLogo from "../../assets/brandsLogos/mini_press_domax.png";
import klimas from "../../assets/brandsLogos/klimas.png";
import magKrak from "../../assets/brandsLogos/Magkrak.png";
import fisher from "../../assets/brandsLogos/0logo5.png";

interface BrandInterface {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  cssEase: string;
  pauseOnHover: boolean;
}

const Brands: React.FC = () => {
  const settings: BrandInterface = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20">
      <div className=" pl-4 pr-4 cursor-default">
        <Slider {...settings}>
          <BrandContext logoImg={t} />
          <BrandContext logoImg={klimas} />
          <BrandContext logoImg={magKrak} />
          <BrandContext logoImg={domaxLogo} />
          <BrandContext logoImg={fisher} />
        </Slider>
      </div>
    </section>
  );
};

export default Brands;
