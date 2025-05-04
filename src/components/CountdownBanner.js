import { useEffect, useState } from "react";

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = getRemainingTime();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const presaleStarted = timeLeft === 0;

  return (
    <>
      <div style={{
        backgroundColor: "#2e3f8c",
        color: "#fff",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "6px 0",
        fontWeight: "600",
        fontSize: "15px",
        borderBottom: "2px solid #4a5ed6",
        position: "relative"
      }}>
        <div style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "scroll-left 15s linear infinite"
        }}>
          {presaleStarted
            ? "✅ Private Pre-Sale Started!"
            : `Private Pre-Sale Starts In: ${formatTime(timeLeft)}`}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}

function getRemainingTime() {
  const deadline = new Date("2025-05-03T00:00:00Z");
  const now = new Date();
  const diff = deadline - now;
  return diff > 0 ? diff : 0;
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
