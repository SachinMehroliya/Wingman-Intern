import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Insights = () => {
  // Data for the Line Chart (Consultations)
  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Incoming",
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Answered",
        data: [8, 15, 2, 4, 1, 2, 6],
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        tension: 0.4,
      },
      {
        label: "Experts Online",
        data: [10, 18, 5, 8, 6, 4, 9],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderDash: [5, 5], // Dashed line for distinction
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(200, 200, 200, 0.2)" } },
    },
  };

  // Data for Bar Chart (VS Past Period)
  const barChartData = {
    labels: ["This Week", "Last Week"],
    datasets: [
      {
        label: "Consultations",
        data: [24, 30],
        backgroundColor: "rgb(75, 192, 192)",
        barThickness: 40,
      },
      {
        label: "Orders Closed",
        data: [12, 20],
        backgroundColor: "rgb(153, 102, 255)",
        barThickness: 40,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(200, 200, 200, 0.2)" } },
    },
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Insights</h2>

      {/* Responsive Flex Layout */}
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Consultation Box - 3/5 width */}
        <div className="p-4 bg-white rounded-lg shadow-md lg:basis-3/5">
          <h3 className="text-gray-500 mb-2">Consultations</h3>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>

        {/* VS Past Period Box - 1/5 width */}
        <div className="p-2 bg-white rounded-lg shadow-md lg:basis-1/5">
          <h3 className="text-gray-500 p-7 mb-6">VS Past Period</h3>
          <Bar data={barChartData} options={barChartOptions} />
        </div>

        {/* Forecast Box - 1/5 width */}
        <div className="p-6 bg-[#109E8B] rounded-lg shadow-md lg:basis-1/5 text-center">
          <h3 className="text-white mb-4 font-semibold">Forecasts</h3>
          <p className="text-white text-4xl font-bold pt-4">+15%</p>
          <p className="text-white text-sm mb-2">
            Forecasted increase in your sales closed by the end of the current month
          </p>
          <p className="text-white text-4xl font-bold pt-6">+20%</p>
          <p className="text-white text-sm">
            Forecasted increase in consultations by the end of the current month
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insights;
