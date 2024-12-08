import React from "react";
import Chart from "react-apexcharts";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const BarChart: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const createSpringStyles = (translateX: number, friction: number) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0px)" : `translateX(${translateX}px)`,
      config: { mass: 5, tension: 100, friction },
    });

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024"],
    },
    colors: ["#FF5733"],
    title: {
      text: "Rozwój firmy",
      align: "center",
      style: {
        fontSize: "20px",
      },
    },
    plotOptions: {
      bar: {
        distributed: false,
      },
    },
  };

  const series = [
    {
      name: "Wysłane zamówienia",
      data: [5700, 10000, 16000, 24000, 31000],
    },
  ];
  const { t } = useTranslation();

  return (
    <section className="mt-20 flex overflow-hidden flex-col lg:flex-row">
      <div className="flex w-full lg:w-6/12 justify-center" ref={ref}>
        <Chart
          options={options}
          series={series}
          type="bar"
          style={{
            width: "100%",
            height: "100%",
            minWidth: "300px",
            maxWidth: "700px",
            minHeight: "300px",
            maxHeight: "700px",
          }}
        />
      </div>
      <div className="w-full lg:w-6/12 pl-5 lg:pl-10 flex flex-col items-start sm:pr-5 lg:pr-20">
        <animated.div
          className="text-xl font-semibold"
          style={createSpringStyles(150, 50)}
        >
          {t("chartHeader")}
        </animated.div>
        <div className="flex text-justify pr-5 mt-5 flex-col chart-desc">
          <animated.p style={createSpringStyles(150, 50)}>
            {t("chartP1")}
          </animated.p>

          <animated.p className="mt-5" style={createSpringStyles(250, 50)}>
            {t("chartP2")}
          </animated.p>
          <animated.p className="mt-5" style={createSpringStyles(300, 50)}>
            {t("chartP3")}
          </animated.p>
        </div>
      </div>
    </section>
  );
};

export default BarChart;
