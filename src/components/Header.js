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
          {mounted && (presaleStarted
            ? "✅ Private Pre-Sale Started!"
            : `Private Pre-Sale Starts In: ${formatTime(timeLeft)}`)}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <header className="header-section">
        <div className="container py-3 d-flex flex-column flex-lg-row align-items-center justify-content-center">
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
          <nav className={`menu-wrapper ${menuOpen ? "active" : ""} w-100 d-lg-flex justify-content-center`}>
            <ul className="menu flex-column flex-lg-row align-items-center justify-content-center gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li className="menu-item-has-children">
                <a href="#" onClick={toggleSubmenu}>Project</a>
                <ul className="submenu">
                  <li><Link href="/projectdetails">Project Details</Link></li>
                  <li><Link href="/tokenomics">Tokenomics</Link></li>
                  <li><Link href="/apply-project">Buy INF Token</Link></li>

                  
                </ul>
              </li>

              <li>
                <Link href="/farming">Farming</Link>
              </li>

              <li className="menu-item-has-children">
                <a href="#" onClick={toggleSubmenu}>Pages</a>
                <ul className="submenu">
                  <li><Link href="/roadmap">Roadmap</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/team">Team</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
