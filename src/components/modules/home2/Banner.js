"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  const [stats, setStats] = useState({
    amount: 565000000,
    investors: 120000000,
    projects: 999,
    verified: 65000000,
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.75;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const chars = "INF0101BITCOINOPNET".split("");

    let rainOpacity = 0; // ✅ Start invisible

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.015)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(74, 94, 214, ${rainOpacity})`;
      ctx.font = "15px monospace";

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      // ✅ Smooth fade-in effect
      if (rainOpacity < 0.25) {
        rainOpacity += 0.0035;
      }
    }

    let rainInterval;
    const delayTimeout = setTimeout(() => {
      rainInterval = setInterval(draw, 50);
    }, 7000); // ✅ 5 sec delay

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(rainInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

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
        position: "relative",
        backgroundImage: "url(images/banner/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div className="banner__wrapper">
          {/* Hero Content */}
          <div className="row g-5 justify-content-center">
            <div className="col-lg-10 text-center">
              <Image
                src="/images/logo/logo.png"
                alt="Innofaith Logo"
                width={180}
                height={60}
                className="logo-glow"
              />
              <h1 className="glitch-text">Pure GPU Force. Bitcoin as the Core.</h1>
<p className="text-light">
  Accelerating Bitcoin sharding with GPU-driven power and zk-proof scalability for the next era of Web3.
</p>
            </div>
          </div>

          {/* ✅ Floating Animated Stat Cards */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="stats-container">
                <StatCard
                  value={`$${(stats.amount / 1_000_000).toFixed(1)}M`}
                  label="Total Amount Raised"
                />
                <StatCard
                  value={`${(stats.investors / 1_000_000).toFixed(1)}M+`}
                  label="Accredited Investors"
                />
                <StatCard
                  value={`${stats.projects}+`}
                  label="Active GPU Units"
                />
                <StatCard
                  value={`${(stats.verified / 1_000_000).toFixed(1)}M`}
                  label="GPU Power (H/s)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-glow {
          filter: drop-shadow(0 0 15px #4a5ed6);
          margin-bottom: 25px;
        }
        .glitch-text {
          color: #fff;
          font-weight: 800;
          font-size: 2.5rem;
          text-shadow: 0 0 15px rgba(74, 94, 214, 0.8);
        }
        .stats-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 15px;
        }
        .stat-card {
          flex: 1;
          min-width: 180px;
          background: rgba(20, 20, 40, 0.7);
          border: 1px solid rgba(74, 94, 214, 0.5);
          border-radius: 12px;
          padding: 20px;
          color: #fff;
          text-align: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 20px rgba(74, 94, 214, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: floatCard 4s ease-in-out infinite;
        }
        .stat-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 25px rgba(74, 94, 214, 0.7);
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: bold;
          color: #4a9fff;
          text-shadow: 0 0 10px #4a9fff;
        }
        .stat-label {
          margin-top: 5px;
          font-size: 0.9rem;
          color: #ddd;
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
};

const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

export default Banner;
