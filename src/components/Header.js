import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const closeMenu = () => setMenuOpen(false);
    router.events.on("routeChangeStart", closeMenu);
    return () => {
      router.events.off("routeChangeStart", closeMenu);
    };
  }, [router.events]);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = getRemainingTime();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    const parent = e.currentTarget.closest("li");
    const label = e.currentTarget.textContent.trim().toLowerCase();
    if (label === "project" || label === "pages") {
      parent.classList.toggle("open");
    }
  };

  const presaleStarted = timeLeft === 0;

  return (
    <>
      {/* Countdown Banner */}
      <div
        style={{
          background: "linear-gradient(90deg, #0c1f4a, #2e3f8c)",
          color: "#fff",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "6px 0",
          fontWeight: "600",
          fontSize: "15px",
          borderBottom: "2px solid #4a5ed6",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            animation: "scroll-left 15s linear infinite",
          }}
        >
          {mounted &&
            (presaleStarted
              ? "Pre-seed Started!"
              : `Pre-seed Starts In: ${formatTime(timeLeft)}`)}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* Header Section */}
      <header
        className="header-section"
        style={{
          backgroundColor: "#0b0f1c",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        <div className="container py-3 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo mb-3 mb-lg-0">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Innofaith Logo"
                width={160}
                height={55}
              />
            </Link>
          </div>

          {/* Hamburger button */}
          <div
            id="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`header-bar d-lg-none ${menuOpen ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`menu-wrapper ${
              menuOpen ? "active" : ""
            } w-100 d-lg-flex justify-content-center`}
          >
            <ul className="menu flex-column flex-lg-row align-items-center justify-content-center gap-4">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="menu-item-has-children">
                <a href="#" className="nav-link" onClick={toggleSubmenu}>
                  Project
                </a>
                <ul className="submenu">
                  <li><Link href="/projectdetails">Project Details</Link></li>
                  <li><Link href="/tokenomics">Tokenomics</Link></li>
                  <li><Link href="/buy-token">Buy INF Token</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/farming" className="nav-link">
                  Details
                </Link>
              </li>

              <li className="menu-item-has-children">
                <a href="#" className="nav-link" onClick={toggleSubmenu}>
                  Pages
                </a>
                <ul className="submenu">
                  <li><Link href="/roadmap">Roadmap</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/team">Team</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>

              {/* Highlight Buy Button */}
              <li>
                <Link
                  href="/buy-token"
                  className="px-4 py-2 rounded-full text-white font-semibold"
                  style={{
                    background: "linear-gradient(90deg, #3fa9f5, #4ac4ff)",
                    boxShadow: "0 0 12px rgba(63, 169, 245, 0.6)",
                  }}
                >
                  Buy INF
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <style jsx global>{`
        .nav-link {
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #3fa9f5;
          text-shadow: 0 0 6px rgba(63, 169, 245, 0.8);
        }
        .submenu {
          background: #10172b;
          border-radius: 8px;
          padding: 10px;
        }
        .submenu li a:hover {
          color: #4ac4ff;
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
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
