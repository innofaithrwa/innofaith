import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";

const roadmapData = [
  {
    quarter: "Q2 2025",
    title: "Private Pre-Sale Launch",
    description: "Start private INF token offering to early believers. Secure funds for mining phase 1.",
  },
  {
    quarter: "Q3 2025",
    title: "Mining Deployment Phase 1",
    description: "Hardware shipping & setup in Guinea and Qatar. Site construction and grid connection.",
  },
  {
    quarter: "Q4 2025",
    title: "Public Sale & Dashboard Launch",
    description: "Open INF token public sale. Launch live mining rewards dashboard for users.",
  },
  {
    quarter: "Q1 2026",
    title: "Expansion to Real Estate & Energy",
    description: "Tokenize real estate assets and expand INF mining to Kazakhstan and Ethiopia.",
  }
];

const Roadmap = () => {
  return (
    <>
      <PageHeader title="Roadmap" text="INF Vision Timeline" />

      <section className="padding-top padding-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-white">Building the Future of Mining</h2>
            <p className="text-white mt-3">
              Our mission: to make real-world mining transparent, scalable, and accessible to everyone through INF tokenization.
            </p>
          </div>

          <div className="timeline">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="timeline-item aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                style={{
                  position: "relative",
                  background: "rgba(255, 102, 196, 0.05)",
                  border: "1px solid rgba(255, 102, 196, 0.2)",
                  borderRadius: "15px",
                  padding: "30px",
                  marginBottom: "50px",
                  boxShadow: "0 0 20px rgba(255, 102, 196, 0.15)",
                  overflow: "hidden",
                  transition: "all 0.5s ease",
                }}
              >
                {/* Pink connector line */}
                <div style={{
                  position: "absolute",
                  left: "calc(50% - 1px)",
                  top: "-30px",
                  height: "30px",
                  width: "2px",
                  background: "linear-gradient(180deg, #ff66c4, #ff9ce3)",
                  opacity: index === 0 ? 0 : 1
                }} />

                <h4 className="text-white">{item.quarter}</h4>
                <h5 className="text-pink mt-2 mb-2">{item.title}</h5>
                <p className="text-white">{item.description}</p>

                {/* Pink blur glow at bottom */}
                <div style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "50px",
                  background: "rgba(255, 102, 196, 0.2)",
                  filter: "blur(30px)",
                  zIndex: 0
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <ApplyToLaunch />
    </>
  );
};

export default Roadmap;
