"use client";
import { motion } from "framer-motion";
import {
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Footer = () => {
  const [explode, setExplode] = useState(false);

  // Trigger glow pulse every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setExplode(true);
      setTimeout(() => setExplode(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        backgroundColor: "#05070d",
        paddingTop: "40px",
        paddingBottom: "20px",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Logo with glowing supernova effect */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        animate={{
          scale: explode ? [1, 1.4, 1] : [1, 1.05, 1],
          filter: explode
            ? [
                "drop-shadow(0 0 0px #4a5ed6)",
                "drop-shadow(0 0 60px #4a5ed6)",
                "drop-shadow(0 0 20px #4a5ed6)",
              ]
            : [
                "drop-shadow(0 0 10px #4a5ed6)",
                "drop-shadow(0 0 20px #4a5ed6)",
                "drop-shadow(0 0 10px #4a5ed6)",
              ],
        }}
        transition={{ duration: 1 }}
        className="mb-4 d-inline-block"
      >
        <Image
          src="/images/logo/logo.png"
          width={170}
          height={60}
          alt="Innofaith Logo"
        />
      </motion.div>

      {/* Slogan */}
      <motion.p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#ffffff",
          marginTop: "10px",
          marginBottom: "20px",
          textShadow: "0 0 15px rgba(74, 94, 214, 0.8)",
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        We make <strong>GPU mining</strong> accessible for everyone.
      </motion.p>

      {/* Social Links */}
      <motion.ul
        className="social d-flex justify-content-center gap-3"
        style={{ listStyle: "none", padding: 0, margin: "10px 0 20px 0" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          { icon: faTwitter, url: "https://twitter.com/innofaithrwa" },
          { icon: faInstagram, url: "https://www.instagram.com/innofaithrwa" },
        ].map((item, i) => (
          <motion.li
            key={i}
            whileHover={{
              scale: 1.4,
              rotate: 10,
              textShadow: "0 0 12px #4ac4ff",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#3fa9f5",
                fontSize: "24px",
                transition: "all 0.3s ease",
              }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Copyright */}
      <motion.div
        style={{
          color: "#aab4d4",
          fontSize: "14px",
          marginTop: "5px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Innofaith © 2025 | All Rights Reserved
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
