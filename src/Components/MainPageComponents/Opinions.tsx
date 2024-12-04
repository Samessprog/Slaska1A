import React from "react";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";

interface Settings {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="100px"
      viewBox="0 -960 960 960"
      width="100px"
      fill="undefined"
      className={`a50w-50h ${className}`}
      onClick={onClick}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="undefined"
      className={`a50w-50h   ${className}`}
      onClick={onClick}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}

const Opinions: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          nextArrow: null,
          prevArrow: null,
          speed: 1000,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          nextArrow: null,
          prevArrow: null,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <section className="mt-10 lg:mt-20 pt-10 options-holder ">
      <div className="text-3xl font-semibold mb-10">
        <h2>
          {" "}
          <em>Jak widzą nas inni</em>
        </h2>
      </div>
      <div className="slider-container ">
        <Slider {...settings}>
          <div className="slide text-justify">
            <p>
              Z całego serca polecam ten sklep! Zakupy przebiegły szybko i
              sprawnie, a produkty dotarły w idealnym stanie. Świetna jakość,
              doskonały kontakt z obsługą klienta i ekspresowa wysyłka. Na pewno
              wrócę na kolejne zakupy!
            </p>
            <div className="mt-5">
              ~ Karolina K.
              <div>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="slide text-justify">
            <p>
              Jestem bardzo zadowolony z zakupów w tym sklepie! Wszystko
              przebiegło sprawnie, produkty dotarły szybko i w doskonałym
              stanie. Strona jest przejrzysta, a proces zakupu intuicyjny.
              Zdecydowanie polecam wszystkim, którzy szukają jakości i
              profesjonalizmu!
            </p>
            <div className="mt-5">
              ~ Karolina K.
              <div>
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={5}
                  readOnly
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Opinions;
