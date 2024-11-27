import React from "react";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";

const Opinions: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <section className="mt-20 pt-10 options-holder ">
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
