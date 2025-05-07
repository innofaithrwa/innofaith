import CounterTwo from "@/components/common/CounterTwo";
import { useEffect, useState } from "react";
import Banner from "@/components/modules/home2/Banner";
/*import Benifits from "@/components/modules/home2/Benifits";*/
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
        setData(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/tokenomics");
        setTokenomics(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/team");
        setTeam(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);

  return (
    <>
      <Banner />
      <CounterTwo />
      <LiveMap />

      <TokenomicsBlock />
      
      <section className="padding-top padding-bottom" style={{ backgroundColor: "#0c111b" }}>
  <div className="container text-center">
    <h2 className="text-white mb-4">How INF Works</h2>
    <p className="text-white mb-5" style={{ maxWidth: "800px", margin: "auto" }}>
      INF connects real Bitcoin mining infrastructure to tokenized ownership.  
      Every token is backed by physical hashrate from farms we build — transparent, emission-based and anchored on Bitcoin via OP_NET.
    </p>

    <div className="row g-4 justify-content-center">
      <div className="col-md-4">
        <div className="p-4" style={{ background: "rgba(255, 102, 196, 0.05)", borderRadius: "12px", border: "1px solid rgba(255, 102, 196, 0.2)" }}>
          <h4 className="text-white mb-2">1. Build Mining Farms</h4>
          <p className="text-white">We deploy hardware in locations like Guinea and Qatar — powered by low-cost electricity and secured infrastructure.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4" style={{ background: "rgba(255, 102, 196, 0.05)", borderRadius: "12px", border: "1px solid rgba(255, 102, 196, 0.2)" }}>
          <h4 className="text-white mb-2">2. INF Token Emission</h4>
          <p className="text-white">As farms operate, INF tokens are emitted dynamically — tied to hashrate performance and emission logic.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-4" style={{ background: "rgba(255, 102, 196, 0.05)", borderRadius: "12px", border: "1px solid rgba(255, 102, 196, 0.2)" }}>
          <h4 className="text-white mb-2">3. User Participation</h4>
          <p className="text-white">Users acquire INF through pre-sale or listing. Token utility grows as more farms are deployed and hashrate scales.</p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* ROADMAP CTA */}
<section className="text-center padding-top padding-bottom">
  <div className="container">
    <h2 className="text-white mb-3">Want to see our vision?</h2>
    <p className="text-white mb-4">
      Check our roadmap to discover when INF goes public and when farms go live.
    </p>
    <a href="/roadmap" className="default-btn">
      Explore Roadmap
    </a>
  </div>
</section>

{/* TEAM CTA */}
<section className="text-center padding-top padding-bottom">
  <div className="container">
    <h2 className="text-white mb-3">Who's behind INF?</h2>
    <p className="text-white mb-4">
      Meet our core team — people building this project on real infrastructure and belief.
    </p>
    <a href="/team" className="default-btn">
      Meet Our Team
    </a>
  </div>
</section>

      {/* FAQ CTA */}
      <section className="text-center padding-top padding-bottom">
        <div className="container">
          <h2 className="text-white mb-3">Got Questions?</h2>
          <p className="text-white mb-4">
            Visit our FAQ page to learn more about INF, mining, OP_NET, and token sales.
          </p>
          <a href="/faq" className="default-btn">
            Go to FAQ
          </a>
        </div>
      </section>


      <ApplyToLaunchTwo />
    </>
  );
};


export default Home2;
