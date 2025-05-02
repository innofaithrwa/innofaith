import React, { useEffect, useState } from "react";
import Link from "next/link";

const Banner = () => {
  const [stats, setStats] = useState({
    amount: 565000000,
    investors: 120000000,
    projects: 999,
    verified: 65000000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        amount: prev.amount + Math.floor(Math.random() * 5000),
        investors: prev.investors + Math.floor(Math.random() * 1000),
        projects: prev.projects + 1,
        verified: prev.verified + Math.floor(Math.random() * 500),
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="banner banner--style2"
      id="home"
      style={{
        backgroundImage: "url(images/banner/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="banner__wrapper">
          {/* Hero Content */}
          <div className="row g-5 justify-content-center">
            <div className="col-lg-10">
              <div
                className="banner__content text-center aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-duration={900}
              >
                <h1>Built to Scale. Backed by Bitcoin.</h1>
                <p>
                  Launch real-world asset tokens with transparency, utility, and expansion in mind.
                </p>
                <Link href="/whitepaper" className="default-btn">
                  <span>See Our Whitepaper</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Block */}
          <div
            className="row justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-lg-8">
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "30px",
                  borderRadius: "12px",
                  backdropFilter: "blur(4px)",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <div className="row">
                  <StatBlock value={`$${(stats.amount / 1_000_000).toFixed(1)}M`} label="Total Amount Raised" />
                  <StatBlock value={`${(stats.investors / 1_000_000).toFixed(1)}M+`} label="Accredited Investors" />
                  <StatBlock value={`${stats.projects}+`} label="Hashrate Projects" />
                  <StatBlock value={`${(stats.verified / 1_000_000).toFixed(1)}M`} label="BTC Mined" />
                </div>
              </div>
            </div>
          </div>
          {/* End Stats */}
        </div>
      </div>
    </section>
  );
};

const StatBlock = ({ value, label }) => (
  <div className="col-6 col-md-3 mt-4 mt-md-0">
    <h3 style={{ fontWeight: "bold" }}>{value}</h3>
    <p style={{ marginBottom: 0 }}>{label}</p>
    <p style={{ color: "#ff66c4", fontWeight: "600", fontSize: "13px", marginTop: "4px" }}>
      🔒 Coming Soon
    </p>
  </div>
);

export default Banner;
