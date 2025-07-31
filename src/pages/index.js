import CounterTwo from "@/components/common/CounterTwo";
import { useEffect, useState } from "react";
import Banner from "@/components/modules/home2/Banner";
import ApplyToLaunchTwo from "@/components/common/ApplyToLaunchTwo";
import { fetchData } from "@/apiConfig";
import TokenomicsBlock from "@/components/modules/home2/TokenomicsBlock";
import LiveMap from "@/components/home/LiveMap";

const Home2 = () => {
  const [data, setData] = useState([]);
  const [tokenomics, setTokenomics] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/notes");
        setData(response);
      } catch (error) {}
    };
    getAllData();
  }, []);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/tokenomics");
        setTokenomics(response);
      } catch (error) {}
    };
    getAllData();
  }, []);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/team");
        setTeam(response);
      } catch (error) {}
    };
    getAllData();
  }, []);

  return (
    <>
      <Banner />
      <CounterTwo />
      <LiveMap />

      {/* HOW INF WORKS SECTION */}
      <section className="padding-top padding-bottom" style={{ backgroundColor: "#0c111b" }}>
        <div className="container text-center">
          <h2 className="text-white mb-4 text-3xl font-semibold">How INF Works</h2>
          <p className="text-white mb-10" style={{ maxWidth: "800px", margin: "auto" }}>
            INF connects real GPU infrastructure to tokenized ownership.
            Each $INF token represents a stake in high-performance GPUs deployed in Hetzner datacenters,
            delivering verifiable BTC yield through compute workloads.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* STEP 1 */}
            <div
              className="p-8 relative text-left transition-transform transform hover:-translate-y-1 w-full md:w-1/4"
              style={{
                background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 25px rgba(63,169,245,0.25)",
                borderRadius: "9999px",
                minHeight: "300px",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm px-6 py-2"
                style={{
                  background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
                  boxShadow: "0 6px 18px rgba(63,169,245,0.4)",
                  borderRadius: "9999px",
                }}
              >
                Step 1
              </div>

              <h4 className="mt-10 mb-4 font-semibold text-lg" style={{ color: "#3FA9F5" }}>
                Deploy GPU Infrastructure
              </h4>
              <p className="text-white text-sm leading-relaxed">
                We deploy enterprise-grade GPUs in Hetzner-operated datacenters across Germany and Finland,
                ensuring high uptime and reliable compute power.
              </p>

              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "90%",
                  height: "45px",
                  background: "rgba(63,169,245,0.25)",
                  filter: "blur(35px)",
                  borderRadius: "9999px",
                }}
              />
            </div>

            {/* STEP 2 */}
            <div
              className="p-8 relative text-left transition-transform transform hover:-translate-y-1 w-full md:w-1/4"
              style={{
                background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 25px rgba(63,169,245,0.25)",
                borderRadius: "9999px",
                minHeight: "300px",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm px-6 py-2"
                style={{
                  background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
                  boxShadow: "0 6px 18px rgba(63,169,245,0.4)",
                  borderRadius: "9999px",
                }}
              >
                Step 2
              </div>

              <h4 className="mt-10 mb-4 font-semibold text-lg" style={{ color: "#3FA9F5" }}>
                Compute-Backed Yield
              </h4>
              <p className="text-white text-sm leading-relaxed">
                GPU clusters handle real compute workloads, generating BTC yield that is tracked
                transparently and verifiably on-chain.
              </p>

              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "90%",
                  height: "45px",
                  background: "rgba(63,169,245,0.25)",
                  filter: "blur(35px)",
                  borderRadius: "9999px",
                }}
              />
            </div>

            {/* STEP 3 */}
            <div
              className="p-8 relative text-left transition-transform transform hover:-translate-y-1 w-full md:w-1/4"
              style={{
                background: "linear-gradient(180deg, #14151A 0%, #0E0F13 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 25px rgba(63,169,245,0.25)",
                borderRadius: "9999px",
                minHeight: "300px",
                overflow: "hidden",
              }}
            >
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-sm px-6 py-2"
                style={{
                  background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
                  boxShadow: "0 6px 18px rgba(63,169,245,0.4)",
                  borderRadius: "9999px",
                }}
              >
                Step 3
              </div>

              <h4 className="mt-10 mb-4 font-semibold text-lg" style={{ color: "#3FA9F5" }}>
                Stake & Earn
              </h4>
              <p className="text-white text-sm leading-relaxed">
                Stake $INF to gain exposure to this compute-backed yield and participate in governance
                as the network expands to more locations and workloads.
              </p>

              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "90%",
                  height: "45px",
                  background: "rgba(63,169,245,0.25)",
                  filter: "blur(35px)",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP CTA */}
      <section
        className="text-center padding-top padding-bottom"
        style={{
          background: "linear-gradient(90deg, #0b0f1c 0%, #1c2845 100%)",
          borderTop: "1px solid rgba(74,169,245,0.3)",
          borderBottom: "1px solid rgba(74,169,245,0.3)",
          boxShadow: "0 0 30px rgba(63,169,245,0.15) inset",
        }}
      >
        <div className="container">
          <h2 className="text-white mb-3" style={{ textShadow: "0 0 10px rgba(74,169,245,0.5)" }}>
            Want to see our vision?
          </h2>
          <p className="text-white mb-4" style={{ opacity: 0.9, fontSize: "16px", maxWidth: "650px", margin: "0 auto" }}>
            Check our roadmap to discover when INF goes public and when datacenters go live.
          </p>
          <a
            href="/roadmap"
            className="default-btn"
            style={{
              background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
              padding: "12px 28px",
              borderRadius: "9999px",
              boxShadow: "0 4px 15px rgba(63,169,245,0.4)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Explore Roadmap
          </a>
        </div>
      </section>

      {/* TEAM CTA */}
      <section
        className="text-center padding-top padding-bottom"
        style={{
          background: "linear-gradient(90deg, #0b0f1c 0%, #1c2845 100%)",
          borderTop: "1px solid rgba(74,169,245,0.3)",
          borderBottom: "1px solid rgba(74,169,245,0.3)",
          boxShadow: "0 0 30px rgba(63,169,245,0.15) inset",
        }}
      >
        <div className="container">
          <h2 className="text-white mb-3" style={{ textShadow: "0 0 10px rgba(74,169,245,0.5)" }}>
            Who's behind INF?
          </h2>
          <p className="text-white mb-4" style={{ opacity: 0.9, fontSize: "16px", maxWidth: "650px", margin: "0 auto" }}>
            Meet our core team — people building this project on real infrastructure and belief.
          </p>
          <a
            href="/team"
            className="default-btn"
            style={{
              background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
              padding: "12px 28px",
              borderRadius: "9999px",
              boxShadow: "0 4px 15px rgba(63,169,245,0.4)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Meet Our Team
          </a>
        </div>
      </section>

      {/* FAQ CTA */}
      <section
        className="text-center padding-top padding-bottom"
        style={{
          background: "linear-gradient(90deg, #0b0f1c 0%, #1c2845 100%)",
          borderTop: "1px solid rgba(74,169,245,0.3)",
          borderBottom: "1px solid rgba(74,169,245,0.3)",
          boxShadow: "0 0 30px rgba(63,169,245,0.15) inset",
        }}
      >
        <div className="container">
          <h2 className="text-white mb-3" style={{ textShadow: "0 0 10px rgba(74,169,245,0.5)" }}>
            Got Questions?
          </h2>
          <p className="text-white mb-4" style={{ opacity: 0.9, fontSize: "16px", maxWidth: "650px", margin: "0 auto" }}>
            Visit our FAQ page to learn more about INF, GPU compute, OP_NET, and token utility.
          </p>
          <a
            href="/faq"
            className="default-btn"
            style={{
              background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
              padding: "12px 28px",
              borderRadius: "9999px",
              boxShadow: "0 4px 15px rgba(63,169,245,0.4)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Go to FAQ
          </a>
        </div>
      </section>

      <ApplyToLaunchTwo />
    </>
  );
};

export default Home2;
