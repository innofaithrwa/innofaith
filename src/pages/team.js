import { useEffect } from "react";
import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";

const teamMembers = [
  { name: "Harry", role: "Founder & CEO" },
  { name: "Jonas", role: "Chief Strategy Officer (CSO)" },
  { name: "Stefan", role: "Chief Technology Officer (CTO)" },
  { name: "Ito", role: "Head of Development" },
  { name: "Lily", role: "Media & Marketing Designer" },
];

const Team = () => {
  useEffect(() => {
    // Particle background effect
    const particles = document.createElement("div");
    particles.className = "particle-bg";
    document.body.appendChild(particles);
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${3 + Math.random() * 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particles.appendChild(particle);
    }
    return () => {
      document.body.removeChild(particles);
    };
  }, []);

  return (
    <>
      <PageHeader title="Meet Our Leadership Team" text="Team" />

      {/* Iris Scan Overlay */}
      <div className="iris-scan"></div>

      {/* Hero Section */}
      <section className="hero-team text-center py-5 position-relative overflow-hidden">
        <div className="container">
          <h1
            className="display-4 fw-bold text-white animate__animated animate__fadeInDown"
            style={{ textShadow: "0px 0px 20px rgba(0,255,255,0.6)" }}
          >
            ⚡ The Minds Powering Tomorrow’s Bitcoin Reality
          </h1>
          <p
            className="text-white mt-3 animate__animated animate__fadeInUp"
            style={{
              fontSize: "18px",
              maxWidth: "720px",
              margin: "auto",
              textShadow: "0px 0px 6px rgba(0,255,255,0.3)",
            }}
          >
            Our team builds on-chain infrastructure, high-energy ideas and unstoppable execution to
            bridge real-world assets to Bitcoin Layer 1.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="padding-top padding-bottom loco-team">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-md-4 col-lg-3 animate__animated animate__zoomIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center holo-card">
                  <h5 className="text-white mb-1 futuristic-text">{member.name}</h5>
                  <p className="text-cyan mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyToLaunch />

      {/* Hologram and Iris Scan Effects */}
      <style jsx global>{`
        /* Particle background */
        .particle-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          width: 2px;
          height: 12px;
          background: rgba(0, 255, 255, 0.4);
          border-radius: 2px;
          animation: floatDown linear infinite;
        }
        @keyframes floatDown {
          from {
            transform: translateY(-10vh);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          to {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        /* Iris scan animation */
        .iris-scan {
          position: fixed;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
          z-index: 9999;
          animation: irisSweep 5s infinite;
          pointer-events: none;
        }
        @keyframes irisSweep {
          0% {
            left: -100%;
          }
          40% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        /* Neon card */
        .holo-card {
          background: rgba(0, 255, 255, 0.05);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3),
            inset 0 0 10px rgba(0, 255, 255, 0.2);
          transition: all 0.4s ease;
          cursor: pointer;
        }
        .holo-card:hover {
          transform: scale(1.08) rotateY(3deg);
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.8),
            inset 0 0 15px rgba(0, 255, 255, 0.5);
        }

        /* Futuristic text effect */
        .futuristic-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .text-cyan {
          color: #00ffff;
        }
      `}</style>
    </>
  );
};

export default Team;
