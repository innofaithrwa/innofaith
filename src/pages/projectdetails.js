"use client";
import { motion } from "framer-motion";
import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import Link from "next/link";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1500;
    const stepTime = 10;
    const increment = (end - start) / (duration / stepTime);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}</span>;
};

const ProjectDetails = () => {
  return (
    <>
      <PageHeader title="Project Details" text="INF GPU Infrastructure Protocol" />

      <section
        className="pro-details padding-top padding-bottom relative overflow-hidden"
        style={{ backgroundColor: "#0c111b" }}
      >
        <div className="container relative z-10 text-center max-w-6xl">

          {/* ===== Title ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h2 className="text-white text-5xl font-bold leading-snug">
              Sovereign GPU Compute Infrastructure on Bitcoin Layer 1
            </h2>
            <p className="mt-6 text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              INF builds the first decentralized, real-world GPU compute layer anchored to Bitcoin.
              Each token is backed by high-performance GPUs delivering AI, ZK proofs, and Web3 compute power
              with full OP_RETURN transparency and BTC yield.
            </p>
          </motion.div>

          {/* ===== Animated Stats ===== */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="p-6 bg-gradient-to-b from-[#14151A] to-[#0E0F13] rounded-2xl shadow-lg">
              <h3 className="text-4xl text-blue-400 font-bold">
                <AnimatedCounter target={3} />+
              </h3>
              <p className="text-gray-300 mt-2">Global Datacenter Locations</p>
            </div>
            <div className="p-6 bg-gradient-to-b from-[#14151A] to-[#0E0F13] rounded-2xl shadow-lg">
              <h3 className="text-4xl text-blue-400 font-bold">
                <AnimatedCounter target={1000} />+
              </h3>
              <p className="text-gray-300 mt-2">High-Performance GPUs</p>
            </div>
            <div className="p-6 bg-gradient-to-b from-[#14151A] to-[#0E0F13] rounded-2xl shadow-lg">
              <h3 className="text-4xl text-blue-400 font-bold">
                <AnimatedCounter target={10000000} /> INF
              </h3>
              <p className="text-gray-300 mt-2">Total Token Supply</p>
            </div>
          </motion.div>

          {/* ===== Floating Glow Info Blocks ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row justify-center gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-10 relative text-left w-full md:w-1/2"
              style={{
                background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 40px rgba(63,169,245,0.25)",
                borderRadius: "20px",
                minHeight: "360px",
              }}
            >
              <h4 className="text-white text-xl font-bold mb-6">Protocol Overview</h4>
              <ul className="text-gray-200 text-base leading-relaxed space-y-3">
                <li>Bitcoin-native compute protocol — no bridges or wrapped assets</li>
                <li>Verifiable, real BTC yield from global GPU workload execution</li>
                <li>Open-source OP_RETURN logs ensure transparency</li>
                <li>AI-driven scaling engine for optimal hardware usage</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-10 relative text-left w-full md:w-1/2"
              style={{
                background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 40px rgba(63,169,245,0.25)",
                borderRadius: "20px",
                minHeight: "360px",
              }}
            >
              <h4 className="text-white text-xl font-bold mb-6">Infrastructure</h4>
              <ul className="text-gray-200 text-base leading-relaxed space-y-3">
                <li>Datacenters in Germany, Finland, USA</li>
                <li>GPU types: NVIDIA H100, A100, L40S clusters</li>
                <li>Powered by 100% renewable energy sources</li>
                <li>Ready for ZK, AI, and Web3 decentralized workloads</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* ===== Roadmap Animated ===== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-16"
          >
            <h3 className="text-white text-4xl font-bold mb-6">Roadmap Highlights</h3>
            <motion.ul
              className="text-gray-200 text-lg leading-relaxed space-y-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <li>Q2 2025 – Initial deployment on Hetzner datacenters</li>
              <li>Q3 2025 – INF staking with real BTC yield</li>
              <li>Q4 2025 – Sovereign GPU datacenter site launch</li>
              <li>Q1 2026 – AI-powered decentralized compute marketplace</li>
            </motion.ul>
          </motion.div>

          {/* ===== Whitepaper Button ===== */}
          <motion.div
            className="text-center mt-14"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/whitepaper.pdf"
              className="default-btn"
              style={{
                background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
                padding: "14px 34px",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: "600",
                boxShadow: "0 4px 20px rgba(63,169,245,0.4)",
              }}
            >
              Download Full Whitepaper
            </Link>
          </motion.div>
        </div>
      </section>

      <ApplyToLaunch />
    </>
  );
};

export default ProjectDetails;
