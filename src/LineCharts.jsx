import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var costos = [20, 10, 30, 20, 0, 20, 10, 10, 40, 10, 20];
var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 10, -10, 60];
var meses = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

var miData = {
  labels: meses,
  datasets: [
    {
      label: "Costos",
      data: costos,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(15,99,132)",
      backgroundColor: "rgba(15,99,132, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(15,99,132)",
      pointBackgroundColor: "rgb(15,99,132)",
    },
    {
        label: "Beneficios",
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgb(255,99,132)",
        pointBackgroundColor: "rgb(255,99,132)",
      },
  ],
};

var misOptions = {
  scales: {
    y: {
      max: 100,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

function LineCharts() {
  return <Line data={miData} options={misOptions}></Line>;
}

export default LineCharts;
