import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const initialActivity = [
  { id: 1, msg: "0.23 BTC → Wallet ...a9c1 — 5,000 INF Requested", ts: Date.now() },
  { id: 2, msg: "Farm Online: Guinea Hashnode-1", ts: Date.now() - 20000 },
  { id: 3, msg: "New Activity: 2.1 TH/s mined", ts: Date.now() - 40000 },
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
        "1.2 BTC → Wallet ...58bf — 12,000 INF Purchased",
        "Kazakhstan Node-2 Deployed",
        "Qatar Power Surge: +7.3 kWh",
        "New Mining Session Started",
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
    { lat: 11.8037, lng: -15.1804, name: "Guinea" },
    { lat: 25.3548, lng: 51.1839, name: "Qatar" },
    { lat: 48.0196, lng: 66.9237, name: "Kazakhstan" },
    { lat: 9.145, lng: 40.4897, name: "Ethiopia" },
  ];

  if (!mounted) return null;

  return (
    <section className="padding-top padding-bottom bg-black text-white">
      <div className="container text-center">
        <h2 className="mb-4">INF Global Mining LiveMap</h2>

        {/* Globe container */}
        <div
          style={{
            height: "600px",
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto 50px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "25px",
            overflow: "hidden",
            boxShadow: "0 0 100px rgba(255, 0, 153, 0.6)",
            border: "2px solid rgba(255, 0, 153, 0.6)",
          }}
        >
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
            pointsData={markerData}
            pointLat={(d) => d.lat}
            pointLng={(d) => d.lng}
            pointAltitude={() => 0.07} // Halfhoog
            pointColor={() => "rgba(255,0,153,1.0)"}
            atmosphereColor="#ff00aa"
            atmosphereAltitude={0.3}
          />
        </div>

        {/* Activity Feed */}
        <h4 className="mb-2 text-pink">Live Activity Feed</h4>

        <div
          style={{
            background: "#111",
            borderRadius: "12px",
            padding: "20px",
            maxWidth: "650px",
            margin: "0 auto",
            boxShadow: "0 0 35px rgba(255,0,153,0.4)",
            border: "1px solid rgba(255,0,153,0.3)",
          }}
        >
          <div
            className="text-white text-sm mb-3 font-semibold"
            style={{ color: "#ff66c4" }}
          >
            🔒 Pre-Sale Phase Active – Data is Simulated
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
          This visualizer shows simulated mining & wallet activity. Real-time
          blockchain-linked stats will activate post-launch.
        </p>
      </div>
    </section>
  );
};

export default LiveMap;
