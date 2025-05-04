import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FarmOverviewCharts = () => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/farms");
        const data = await response.json();
        setFarms(data);
      } catch (error) {
        console.error("Failed to load farm data", error);
      }
    };

    fetchFarms();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-white text-center mb-5">Farm Mining Performance Overview</h2>

      {farms.map((farm, index) => (
        <div key={farm.id} className="mb-5" style={{ background: "rgba(255, 102, 196, 0.05)", padding: "20px", borderRadius: "10px" }}>
          <h4 className="text-white text-center mb-3">{farm.name}</h4>
          <div style={{ width: "100%", height: "250px" }}>
            <Bar
              data={{
                labels: ["ROI (%)", "Hashrate (TH/s)", "Income (USD)"],
                datasets: [
                  {
                    label: `${farm.name} Data`,
                    data: [farm.roi, farm.hashrate, farm.incomeUSD / 1000],
                    backgroundColor: [
                      "rgba(255, 102, 196, 0.8)",
                      "rgba(255, 102, 196, 0.6)",
                      "rgba(255, 102, 196, 0.4)"
                    ],
                    borderRadius: 5,
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: { ticks: { color: "#ffffff" }, grid: { color: "#333" } },
                  x: { ticks: { color: "#ffffff" }, grid: { color: "#333" } }
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FarmOverviewCharts;
