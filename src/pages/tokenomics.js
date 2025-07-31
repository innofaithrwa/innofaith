import PageHeader from "@/components/base/PageHeader";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const data = {
    labels: [
      "Pre-Seed (6%)",
      "Seed (14%)",
      "Private (14%)",
      "IDO (11%)",
      "Team & Advisors (15%)",
      "Treasury Reserve (17.5%)",
      "Strategic Ops Pool (17.5%)",
      "Ecosystem Growth (5%)"
    ],
    datasets: [
      {
        label: "INF Distribution",
        data: [6, 14, 14, 11, 15, 17.5, 17.5, 5],
        backgroundColor: [
          "#a55eff", "#9f6fff", "#7d3fff", "#c44dff",
          "#b94dff", "#8b5cf6", "#d37fff", "#b388ff"
        ],
        borderColor: "rgba(255,255,255,0.15)",
        borderWidth: 2,
        hoverOffset: 15
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#ffffff",
          font: { size: 14 },
          padding: 12,
          boxWidth: 16
        }
      },
      tooltip: {
        backgroundColor: "#1a0033",
        titleColor: "#a55eff",
        bodyColor: "#fff",
        borderWidth: 1,
        borderColor: "#a55eff",
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}%`
        }
      }
    }
  };

  return (
    <>
      <PageHeader title="Tokenomics" text="INF Distribution & Utility" />

      <section className="padding-top padding-bottom bg-black text-white">
        <div className="container text-center">

          {/* Title */}
          <h2 className="text-3xl font-semibold mb-6 tracking-wide glow-title">
            INF Token Distribution
          </h2>

          {/* Intro Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-box mb-6"
          >
            <p className="opacity-80 text-lg mb-2 max-w-2xl mx-auto">
              INF is built for long-term sustainability with fair allocations, a treasury-backed reserve,
              and growth-focused pools ensuring ecosystem expansion and holder value.
            </p>
          </motion.div>

          {/* Chart Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-box mb-6"
          >
            <div className="chart-container">
              <Doughnut data={data} options={options} />
            </div>

            <div className="mt-5 text-start info-text">
              <p>
                <strong>Utility & Allocation:</strong><br />
                6% Pre-Seed • 14% Seed & Private • 11% IDO<br />
                15% Team & Advisors (vesting) • 17.5% Treasury Reserve<br />
                17.5% Strategic Ops Pool • 5% Ecosystem Growth
              </p>
            </div>
          </motion.div>

          {/* Table Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="glass-box mb-6"
          >
            <table className="tokenomics-table text-center">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Token %</th>
                  <th>Tokens</th>
                  <th>TGE Unlock</th>
                  <th>Vesting</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Pre-Seed</td><td>6%</td><td>600,000</td><td>100%</td><td>-</td></tr>
                <tr><td>Seed</td><td>14%</td><td>1,403,555</td><td>100%</td><td>-</td></tr>
                <tr><td>Private</td><td>14%</td><td>1,403,556</td><td>100%</td><td>-</td></tr>
                <tr><td>IDO</td><td>11%</td><td>1,092,889</td><td>100%</td><td>-</td></tr>
                <tr><td>Team & Advisors</td><td>15%</td><td>1,500,000</td><td>10%</td><td>6m cliff, 24-36m linear</td></tr>
                <tr><td>Treasury Reserve</td><td>17.5%</td><td>1,750,000</td><td>0%</td><td>Locked until DAO</td></tr>
                <tr><td>Strategic Ops Pool</td><td>17.5%</td><td>1,750,000</td><td>DAO release</td><td>Flexible</td></tr>
                <tr><td>Ecosystem Growth</td><td>5%</td><td>500,000</td><td>DAO release</td><td>Flexible</td></tr>
              </tbody>
            </table>
          </motion.div>

          {/* Button Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="glass-box text-center"
          >
            <a href="/whitepaper.pdf" download className="btn-purple">
              Download Whitepaper
            </a>
          </motion.div>

        </div>
      </section>

      <style jsx>{`
        .bg-black {
          background: #000000;
        }
        .glow-title {
          text-shadow: 0 0 12px rgba(165, 94, 255, 0.6);
        }
        .glass-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(165, 94, 255, 0.4);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 0 30px rgba(165, 94, 255, 0.3);
          backdrop-filter: blur(8px);
        }
        .chart-container {
          max-width: 600px;
          height: 350px;
          margin: 0 auto;
        }
        .info-text {
          max-width: 600px;
          margin: 20px auto 0;
          font-size: 15px;
          line-height: 1.6;
          color: #fff;
        }
        .tokenomics-table {
          width: 100%;
          color: #fff;
          border-collapse: collapse;
        }
        .tokenomics-table th, .tokenomics-table td {
          padding: 12px;
          border-bottom: 1px solid rgba(165, 94, 255, 0.2);
        }
        .tokenomics-table thead {
          background: rgba(165, 94, 255, 0.2);
        }
        .tokenomics-table tbody tr:hover {
          background: rgba(165, 94, 255, 0.15);
        }
        .btn-purple {
          background: linear-gradient(90deg, #a55eff, #d37fff);
          color: #fff;
          font-weight: bold;
          padding: 12px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 0 25px rgba(165, 94, 255, 0.6);
          transition: 0.3s ease;
        }
        .btn-purple:hover {
          box-shadow: 0 0 45px rgba(165, 94, 255, 0.9);
        }
      `}</style>
    </>
  );
};

export default Tokenomics;
