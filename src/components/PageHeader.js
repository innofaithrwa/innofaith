"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const PageHeader = ({ title, text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 200;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const chars = "INF0101BITCOINOPNET".split("");

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#ff66c4";
      ctx.font = "15px monospace";

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

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
        height: "200px",
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
          paddingTop: "50px",
        }}
      >
        <h2
          className="text-capitalize"
          style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: "32px",
            textShadow: "0 0 15px rgba(255, 102, 196, 0.3)",
          }}
        >
          {title}
        </h2>
        <nav aria-label="breadcrumb">
          <ol
            className="breadcrumb justify-content-center mb-0"
            style={{
              background: "transparent",
              padding: "10px 0",
              marginTop: "8px",
              color: "#bbb",
            }}
          >
            <li className="breadcrumb-item">
              <Link href="/" style={{ color: "#bbb" }}>
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              {text}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
