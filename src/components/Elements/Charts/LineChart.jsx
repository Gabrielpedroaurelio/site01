import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function LineChart({props_labels,props_label,props_data}) {
  const data = {
    labels: [...props_labels],
    datasets: [
      {
        label: `${props_label}`,
        data: [...props_data],
        borderColor: "rgba(0, 162, 255, 1)",       // azul forte
        backgroundColor: "rgba(47, 196, 255, 0.89)", // fundo totalmente transparente
        borderWidth: 3,
        pointRadius: 4,
        pointBackgroundColor: "rgba(47, 107, 255, 1)",
        pointBorderColor: "#fff",
        tension: 0.4, // linha mais suave
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#304164" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#304164" },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
