"use client";
import React, { useEffect, useRef } from "react";

const PageHeader = ({ title, text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 220;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const chars = "INF0101BITCOINOPNET".split("");

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff66c4";
      ctx.font = "16px monospace";

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = 220;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
        height: "220px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
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
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "60px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: "34px",
            textShadow: "0 0 15px rgba(255, 102, 196, 0.4)",
          }}
        >
          {title}
        </h2>
        {text && (
          <p
            style={{
              color: "#bbb",
              marginTop: "8px",
              fontSize: "18px",
              textShadow: "0 0 8px rgba(255, 102, 196, 0.3)",
            }}
          >
            {text}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
