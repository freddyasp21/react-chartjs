import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var misOptions = {
  responsive: false,
  maintainAspectRatio: false,
};

var miData = {
  labels: ["Carne", "Vino", "Turrón", "Jamón", "Dulces"],
  datasets: [
    {
      label: "Popularidad en Navidad",
      data: [35, 20, 25, 20, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(150, 99, 132, 0.2)",
        "rgba(65, 99, 80, 0.2)",
        "rgba(132, 99, 255, 0.2)",
        "rgba(99, 255, 99, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(150, 99, 132, 1)",
        "rgba(65, 99, 80, 1)",
        "rgba(132, 99, 255, 1)",
        "rgba(99, 255, 99, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function PieCharts() {
  return <Pie data={miData} options={misOptions}></Pie>;
}

export default PieCharts;
