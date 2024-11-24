import React from "react";
import Chart from "react-apexcharts";

const BarChart: React.FC = () => {
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
      data: [30, 40, 35, 50, 80],
    },
  ];

  return (
    <section className="mt-20 flex w-full ">
      <div className="flex w-6/12 justify-end ">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="600"
          height="430"
        />
      </div>
      <div className="w-6/12 pl-10 flex flex-col items-start pr-20">
        <div className="text-xl font-semibold">Wykres zamówień RdR</div>
        <div className="flex text-justify pr-5 mt-5 flex-col">
          Nasz sklep internetowy dynamicznie rozwija się z każdym rokiem, a dane
          pokazują stały wzrost sprzedaży. Wykres prezentuje różnicę w liczbie
          zamówień rok do roku, co pozwala dokładnie zobaczyć, jak skutecznie
          wdrożone strategie marketingowe oraz rozbudowa oferty wpłynęły na
          rozwój. Analiza takich danych jest kluczowa dla planowania przyszłych
          działań i optymalizacji procesów sprzedażowych.
          <p className="mt-5">
            Zwiększenie liczby zamówień rok do roku wskazuje, że klienci coraz
            chętniej korzystają z naszych usług. Porównując wyniki z lat
            poprzednich, możemy wyciągnąć wnioski dotyczące skuteczności
            działań, takich jak kampanie reklamowe czy promocje sezonowe.
          </p>
          <p className="mt-5">
            Obserwowany wzrost potwierdza, że rozwój oferty i jakość obsługi
            mają kluczowy wpływ na zadowolenie klientów. Dzięki temu, że stale
            analizujemy dane, możemy lepiej przewidywać trendy zakupowe, co
            pozwala nam utrzymać konkurencyjność na rynku e-commerce i oferować
            jeszcze lepsze rozwiązania dla naszych użytkowników.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BarChart;
