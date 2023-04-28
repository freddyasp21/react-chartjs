import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var costos = [20, 10, 30, 20, 10, 20, 10, 10, 40, 10, 20, 25];
var beneficios = [10, 56, 20, 36, 80, 40, 30, -20, 10, -10, 60, 90];
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
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "rgba(0,220,195, 0.5)",
    },
    {
        label: "Beneficios",
        data: costos,
        backgroundColor:"rgb(255,99,132)",
      },
  ],
};

var misOptions = {
  responsive: true,
  animation: false,
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: { color: "rgb(0,220,195)" },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

function BarChart() {
  return <Bar data={miData} options={misOptions}></Bar>;
}

export default BarChart;
