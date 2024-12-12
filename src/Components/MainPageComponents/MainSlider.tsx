import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPhotos from "./sliderPhotos";


//imports test
import p1slideTest from "../../assets/mbank-slide — kopia.jpg";
import p1slideTest2 from "../../assets/mbank-slide.jpg";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

const MainSlider: React.FC = () => {
  const photosArr = [p1slideTest, p1slideTest2];

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };

  return (
    <section className="flex justify-center w-full mb-10 test ">
      <div className=" justify-center w-full ">
        <div className="slider-container">
          <Slider {...settings}>
            {photosArr.map((elm, key) => (
              <SliderPhotos elm={elm} key={key} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
