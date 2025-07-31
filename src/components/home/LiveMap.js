import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const initialActivity = [
  { id: 1, msg: "0.05 BTC Yield → Staker ...a9c1 — AI Inference Task", ts: Date.now() },
  { id: 2, msg: "GPU Online: Hetzner Nuremberg Datacenter", ts: Date.now() - 20000 },
  { id: 3, msg: "New Workload: ZK Proof Processed", ts: Date.now() - 40000 },
];

const LiveMap = () => {
  const [activityFeed, setActivityFeed] = useState(initialActivity);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsgs = [
        "0.1 BTC Yield → Staker ...58bf — Contract Execution",
        "Hetzner Falkenstein Datacenter Activated",
        "High-Intensity Task: +5 CU Processed",
        "New Compute Session Started",
      ];
      const newMsg = {
        id: Date.now(),
        msg: randomMsgs[Math.floor(Math.random() * randomMsgs.length)],
        ts: Date.now(),
      };
      setActivityFeed((prev) => [newMsg, ...prev.slice(0, 4)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const markerData = [
    { lat: 49.4521, lng: 11.0767, name: "Hetzner Nuremberg Datacenter", power: "250 PH/s" },
    { lat: 50.3086, lng: 12.2079, name: "Hetzner Falkenstein Datacenter", power: "400 PH/s" },
    { lat: 60.3415, lng: 25.0277, name: "Hetzner Helsinki Datacenter", power: "350 PH/s" },
  ];

  if (!mounted) return null;

  return (
    <section className="padding-top padding-bottom bg-black text-white">
      <div className="container text-center">
        <h2 className="mb-4">INF Global Compute LiveMap</h2>

        {/* Two-column layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT BLOCK - Globe */}
          <div
            style={{
              width: "650px",
              height: "650px",
              background: "#000",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 100px rgba(255, 0, 153, 0.6)",
              border: "2px solid rgba(255, 0, 153, 0.6)",
              flexShrink: 0,
            }}
          >
            <Globe
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundColor="rgba(0,0,0,0)"
              pointsData={markerData}
              pointLat={(d) => d.lat}
              pointLng={(d) => d.lng}
              pointAltitude={() => 0.07}
              pointColor={() => "rgba(255,0,153,1.0)"}
              atmosphereColor="#ff00aa"
              atmosphereAltitude={0.3}
              labelsData={markerData}
              labelLat={(d) => d.lat}
              labelLng={(d) => d.lng}
              labelText={(d) => d.name}
              labelSize={1.5}
              labelDotRadius={0.6}
              labelColor={() => "rgba(255,255,255,0.85)"}
            />
          </div>

          {/* RIGHT BLOCK - Compute Power List */}
          <div
            style={{
              width: "300px",
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 35px rgba(255,0,153,0.4)",
              border: "1px solid rgba(255,0,153,0.3)",
              textAlign: "left",
              height: "fit-content",
              alignSelf: "center",
            }}
          >
            <h4 style={{ color: "#ff66c4", marginBottom: "15px" }}>
              ⚡ Compute Power per Datacenter
            </h4>
            {markerData.map((dc, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid rgba(255,0,153,0.2)",
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>{dc.name}</div>
                <div style={{ color: "#aaa", fontSize: "14px" }}>Power: {dc.power}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <h4 className="mb-2 text-pink mt-5">Live Compute Activity Feed</h4>

        <div
          style={{
            background: "#111",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "650px",
            margin: "20px auto 0 auto",
            boxShadow: "0 0 35px rgba(255,0,153,0.4)",
            border: "1px solid rgba(255,0,153,0.3)",
          }}
        >
          <div
            className="text-white text-sm mb-3 font-semibold"
            style={{ color: "#ff66c4" }}
          >
            🔒 Pre-Launch Phase Active – Data is Simulated
          </div>

          {activityFeed.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-2 border-bottom pb-2 text-sm"
            >
              {new Date(item.ts).toLocaleTimeString()} — {item.msg}
            </motion.div>
          ))}
        </div>

        <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
          This visualizer shows simulated compute & yield activity. Real-time
          on-chain stats will activate post-launch.
        </p>
      </div>
    </section>
  );
};

export default LiveMap;
