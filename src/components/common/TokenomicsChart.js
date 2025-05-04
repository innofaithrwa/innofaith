import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsChart = () => {
  const baseColor = "255, 102, 196"; // #ff66c4 in RGB (pink)

  const data = {
    labels: [
      "IDO Allocation (10%)",
      "Team (10%)",
      "Mining Rewards (40%)",
      "Treasury Reserve (20%)",
      "Liquidity & Partnerships (20%)"
    ],
    datasets: [
      {
        label: "INF Distribution",
        data: [10, 10, 40, 20, 20],
        backgroundColor: [
          `rgba(${baseColor}, 1.0)`,
          `rgba(${baseColor}, 0.8)`,
          `rgba(${baseColor}, 0.6)`,
          `rgba(${baseColor}, 0.4)`,
          `rgba(${baseColor}, 0.2)`
        ],
        borderColor: "#0c111b",
        borderWidth: 2,
        hoverOffset: 10
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      duration: 1500
    },
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          color: "#ffffff",
          boxWidth: 16,
          padding: 10,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}%`
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    }
  };

  return (
    <div>
      <div style={{ width: "100%", height: "350px" }}>
        <Doughnut data={data} options={options} />
      </div>

      <div className="token__info-explanation mt-4 text-start" style={{ maxWidth: "600px", margin: "30px auto 0" }}>
        <p>
          <strong>What is INF?</strong><br />
          INF is a utility token directly tied to real-world value through Bitcoin mining infrastructure.
          Its allocation is carefully structured to ensure balance between token utility,
          ecosystem growth, and long-term sustainability.
        </p>
        <p className="mt-3">
          The IDO Allocation (10%) serves as a launch boost and initial liquidity.
          The majority (40%) is reserved for mining rewards, backing INF with real hashrate-based yield.
          Treasury (20%) ensures operational flexibility and resilience during market cycles.
          Remaining tokens are allocated to partnerships, liquidity, and team incentives.
        </p>
      </div>
    </div>
  );
};

export default TokenomicsChart;
