import PageHeader from "@/components/base/PageHeader";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
  const baseColor = "255, 102, 196";

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
        callbacks: {
          label: (context) => `${context.label}: ${context.formattedValue}%`
        }
      }
    },
    layout: {
      padding: { top: 10, bottom: 10, left: 0, right: 0 }
    }
  };

  return (
    <>
      {/* Paarse hero-banner */}
      <PageHeader title="Tokenomics" text="INF Distribution & Utility" />

      <section className="padding-top padding-bottom">
        <div className="container">

          {/* Titel + intro */}
          <div className="text-center mb-5">
            <h2 className="text-white">INF Token Distribution</h2>
            <p className="text-white mt-3">
              The INF token is carefully structured for long-term balance between ecosystem growth, mining utility and treasury stability.
            </p>
          </div>

          {/* Chart + uitleg in blok */}
          <div
            style={{
              background: "rgba(255, 102, 196, 0.05)",
              border: "1px solid rgba(255, 102, 196, 0.15)",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "900px",
              margin: "0 auto"
            }}
          >
            <div style={{ maxWidth: "600px", height: "350px", margin: "0 auto" }}>
              <Doughnut data={data} options={options} />
            </div>

            <div className="text-white mt-4 text-start" style={{ maxWidth: "600px", margin: "30px auto 0" }}>
              <p>
                <strong>What is INF?</strong><br />
                INF is a utility token directly tied to real-world value through Bitcoin mining infrastructure.
                Its allocation is designed to fuel both the community and the operational foundation of the network.
              </p>
              <p className="mt-3">
                The IDO Allocation (10%) enables early supporters and liquidity.
                The largest portion (40%) is reserved for mining rewards — providing INF with intrinsic hashrate-backed yield.
                Treasury (20%) secures financial continuity and future development,
                while partnerships, liquidity and team incentives each take a strategic 10–20% role.
              </p>
            </div>
          </div>

          {/* Whitepaper knop */}
          <div className="text-center mt-5">
            <p className="text-white">
              📄 For full technical breakdown, download our <strong>whitepaper</strong>.
            </p>
            <a
              href="/whitepaper.pdf"
              download
              className="btn-whitepaper mt-2"
            >
              Download Whitepaper
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
