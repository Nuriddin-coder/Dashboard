import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
);

export const ChartLine = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [65, 59, 70, 81, 56, 55, 40, 50, 60, 30, 50, 70],
        pointBackgroundColor: "white",
        borderColor: "blue",
        pointBorderColor: "blue",
        pointStyle: "circle",
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.5,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      legend: false as boolean,
    },
    scales: {
      x: {
        grid: {
          display: false as boolean,
        },
      },
      y: {
        grid: {
          display: false as boolean,
        },
      },
    },
  };

  return (
    <div className="relative rounded-[10px] bg-white p-4 dark:bg-DarkSecondary tablet:h-[300px] tablet:w-[620px] bigDesktop:h-[300px] bigDesktop:w-[650px]">
      <div className="absolute right-5 top-4 flex items-center gap-[9px]">
        <span className="block h-[10px] w-[10px] rounded-full bg-Clr563B"></span>
        <p className="text-[14px] font-bold text-Primary">Current Period</p>
      </div>
      <Line data={data} options={options}></Line>
    </div>
  );
};
