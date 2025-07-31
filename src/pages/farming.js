"use client";
import { motion } from "framer-motion";
import PageHeader from "@/components/base/PageHeader";

const deployments = [
  {
    name: "Hetzner Cloud Integration",
    status: 65,
    statusText: "Dedicated high-performance servers secured • Global infrastructure ready • Preparing INF compute node deployment",
  },
  {
    name: "Decentralized Compute Marketplace",
    status: 45,
    statusText: "Marketplace concept finalized • Peer-to-peer compute exchange framework under development • Onboarding early providers",
  },
  {
    name: "GPU-Accelerated Nodes",
    status: 35,
    statusText: "Negotiations with high-capacity GPU providers • Node specifications defined • Pilot testing environment in progress",
  },
  {
    name: "Future Global Expansion",
    status: 25,
    statusText: "Roadmap for scaling across multiple regions • Partnerships under discussion • Will launch additional compute zones post-presale",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  hover: {
    scale: 1.06,
    boxShadow: "0 0 40px rgba(255, 102, 196, 0.6)",
    transition: { duration: 0.3 },
  },
};

const progressVariants = {
  hidden: { width: "0%" },
  visible: (width) => ({
    width: `${width}%`,
    transition: { duration: 1.5, ease: "easeInOut" },
  }),
};

const Farming = () => {
  return (
    <>
      <PageHeader title="INF Compute Network" text="Hetzner & Decentralized Marketplace Nodes" />

      <motion.section
        className="padding-top padding-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-white">Decentralized Compute Deployment Status</h2>
            <p className="text-white mt-3">
              We are building a hybrid infrastructure combining <strong>Hetzner’s reliable servers</strong> with a fully decentralized compute marketplace. 
              This allows anyone to <strong>rent or provide compute power</strong>, creating an open, transparent, and competitive environment for Web3 applications.
            </p>
          </motion.div>

          <div className="row g-5">
            {deployments.map((item, index) => (
              <motion.div
                key={index}
                className="col-md-6"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  style={{
                    background: "rgba(0, 0, 0, 0.65)",
                    border: "1px solid rgba(255, 102, 196, 0.2)",
                    borderRadius: "12px",
                    padding: "25px",
                    backdropFilter: "blur(5px)",
                  }}
                  whileHover={{ y: -8 }}
                >
                  <h4 className="text-white mb-3">{item.name}</h4>
                  <p className="text-white mb-3">{item.statusText}</p>
                  <div className="progress" style={{ height: "18px", backgroundColor: "#1f1f2a", overflow: "hidden" }}>
                    <motion.div
                      className="progress-bar"
                      role="progressbar"
                      custom={item.status}
                      variants={progressVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        background: "linear-gradient(90deg, #ff66c4, #ff9ce3)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "8px",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {item.status}%
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-white">
              🚀 The INF Marketplace will soon allow users to <strong>deploy apps, AI models, and blockchain services</strong> 
              on a global, decentralized compute network – combining Hetzner’s power with a <strong>peer-to-peer open market for compute resources</strong>.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Farming;
