import PageHeader from "@/components/base/PageHeader"; 
import ApplyToLaunch from "@/components/common/ApplyToLaunch";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Launch (Live)",
    description: [
      "INF token launched, staking activated",
      "Own GPUs online, generating real BTC yield",
      "Compute Oracle live for task tracking and payout logic",
      "Liquidity active on Bitcoin-native DEX"
    ],
  },
  {
    phase: "Phase 2",
    title: "Network Expansion (Q4 2025)",
    description: [
      "External GPU providers onboarded: professional & community",
      "Workloads include AI inference, ZK proofs, agent systems",
      "TC-based task payouts via OP_NET contracts",
      "Incentive layer drives growth in supply and demand"
    ],
  },
  {
    phase: "Phase 3",
    title: "Decentralized Compute Marketplace (2026)",
    description: [
      "Open market for tasks & GPU capacity",
      "Anyone can provide compute, earn BTC",
      "Yield tied to verified execution via Oracle",
      "Governance transitions to a staker-led DAO"
    ],
  },
  {
    phase: "Phase 4",
    title: "Programmable Execution Layer (2026+)",
    description: [
      "Support for advanced workloads: ZK rollups, QPU, privacy compute",
      "Cross-chain compute coordination",
      "Modular integrations with Bitcoin-native and external ecosystems",
      "INF powers the backend for decentralized infrastructure"
    ],
  }
];

const Roadmap = () => {
  return (
    <>
      <PageHeader title="Roadmap" text="INF Vision Timeline" />

      <section className="padding-top padding-bottom">
        <div className="container text-center">
          <h2 className="text-white text-3xl font-semibold mb-10">Our Roadmap</h2>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="p-8 relative text-left transition-transform transform hover:-translate-y-1 w-full md:w-1/4"
                style={{
                  background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 25px rgba(0, 102, 255, 0.15)", // Blue glow
                  borderRadius: "9999px",
                  minHeight: "350px",
                  overflow: "hidden"
                }}
              >
                {/* Phase Bubble */}
                <div 
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm px-6 py-2"
                  style={{
                    background: "linear-gradient(90deg, #007BFF 0%, #00A3FF 100%)",
                    boxShadow: "0 6px 18px rgba(0, 123, 255, 0.4)",
                    borderRadius: "9999px"
                  }}
                >
                  {item.phase}
                </div>

                {/* Title (Blue now) */}
                <h4 
                  className="mt-10 mb-4 font-semibold text-lg"
                  style={{ color: "#00A3FF" }}
                >
                  {item.title}
                </h4>

                {/* Bullet list */}
                <ul className="text-white text-sm space-y-3 leading-relaxed px-3 py-2">
                  {item.description.map((desc, i) => (
                    <li 
                      key={i} 
                      className="flex items-start rounded-full px-2"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <span className="mr-2 text-blue-400">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Bottom Glow */}
                <div 
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: "90%",
                    height: "45px",
                    background: "rgba(0,123,255,0.25)",
                    filter: "blur(35px)",
                    borderRadius: "9999px"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyToLaunch />
    </>
  );
};

export default Roadmap;
