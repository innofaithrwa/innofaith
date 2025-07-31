import PageHeader from "@/components/base/PageHeader";
import NewsLetter from "@/components/partials/NewsLetter";
import { useState, useEffect, useRef } from "react";

const ApplyProject = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    wallet: "",
    amount: "",
  });

  const [glowIntensity, setGlowIntensity] = useState(20);
  const [particles, setParticles] = useState([]);
  const cardRef = useRef(null);

  // === Particle Animation ===
  useEffect(() => {
    const p = [];
    for (let i = 0; i < 30; i++) {
      p.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(p);
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let { x, y, r, dx, dy } = particle;
          x += dx;
          y += dy;
          if (x < 0 || x > window.innerWidth) dx *= -1;
          if (y < 0 || y > window.innerHeight) dy *= -1;
          return { x, y, r, dx, dy };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // === Breathing Glow Effect ===
  useEffect(() => {
    let increasing = true;
    let frame;
    const pulse = () => {
      setGlowIntensity((prev) => {
        if (prev > 60) increasing = false;
        if (prev < 20) increasing = true;
        return increasing ? prev + 1 : prev - 1;
      });
      frame = requestAnimationFrame(pulse);
    };
    pulse();
    return () => cancelAnimationFrame(frame);
  }, []);

  // === Tilt Animation on Mouse Move ===
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * -5;
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Your request has been sent.");
        setForm({ name: "", email: "", wallet: "", amount: "" });
      } else {
        const data = await response.json();
        alert("Failed to send request: " + data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <PageHeader title="Buy INF Token" text="Secure your mining-backed tokens" />

      {/* Particle Background */}
      <canvas
        id="particle-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></canvas>
      {particles.map((p, index) => (
        <div
          key={index}
          style={{
            position: "fixed",
            top: p.y,
            left: p.x,
            width: p.r * 2,
            height: p.r * 2,
            borderRadius: "50%",
            background: "rgba(255, 102, 196, 0.4)",
            filter: "blur(4px)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      ))}

      {/* Content */}
      <section
        className="padding-top padding-bottom"
        style={{ perspective: "1000px" }}
      >
        <div
          className="container text-center mb-5"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            background: "rgba(255, 102, 196, 0.15)",
            border: "1px solid rgba(255, 102, 196, 0.35)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: `0 0 ${glowIntensity}px rgba(255, 102, 196, 0.6)`,
            color: "white",
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            transition: "transform 0.2s ease-out",
          }}
        >
          <h2 className="text-white mb-3">🚀 Buy INF Token</h2>
          <p>
            The main method to purchase INF is through <b>op_wallet</b>.  
            Currently, op_wallet is in <b>test phase</b>.  
            We also support temporary purchases via <b>BOB (Layer 2)</b> until
            the full release.
          </p>
        </div>

        <div className="container text-center mt-5">
          <h3 className="text-white mb-3">🛠 How to Buy INF</h3>
          <ol className="list-decimal list-inside text-left mx-auto max-w-xl text-white space-y-2">
            <li>Connect via <b>op_wallet</b> (test) or <b>BOB L2</b>.</li>
            <li>Fill in your details below.</li>
            <li>Receive instructions for payment verification.</li>
          </ol>
        </div>

        {/* Form */}
        <div
          className="container mt-5"
          style={{
            background: "rgba(255, 102, 196, 0.15)",
            border: "1px solid rgba(255, 102, 196, 0.35)",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: `0 0 ${glowIntensity}px rgba(255, 102, 196, 0.6)`,
            maxWidth: "700px",
            margin: "0 auto",
            color: "white",
            position: "relative",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "10px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #ff66c4",
                borderRadius: "8px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "10px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #ff66c4",
                borderRadius: "8px",
              }}
            />
            <input
              type="text"
              name="wallet"
              placeholder="Bitcoin Wallet Address"
              value={form.wallet}
              onChange={handleChange}
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "10px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #ff66c4",
                borderRadius: "8px",
              }}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount in INF"
              value={form.amount}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                marginBottom: "15px",
                padding: "10px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #ff66c4",
                borderRadius: "8px",
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background:
                  "linear-gradient(90deg, #ff66c4, #ff99d9, #ff66c4)",
                border: "none",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "0.2s",
                animation: "colorChange 3s infinite alternate",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
               Submit Purchase Request
            </button>
          </form>
        </div>
      </section>

      <NewsLetter />
    </>
  );
};

export default ApplyProject;
