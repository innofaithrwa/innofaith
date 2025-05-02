import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";
import Link from "next/link";

import FarmOverviewCharts from "@/components/common/FarmOverviewCharts";



const ProjectDetails = () => {
  return (
    <>
      <PageHeader title="Project Details" text="INF Mining Project" />
      {/* ================> Project Details Start <================== */}
      <section className="pro-details padding-top padding-bottom">
        <div className="container">
          <div className="pro-details__wrapper">
            {/* Project Basic Info */}
            <div className="text-center mb-5">
              <h2 className="text-white">INF Mining Expansion</h2>
              <p className="mt-3 text-white">
                Innofaith is launching a Bitcoin mining operation backed by real-world infrastructure across Guinea, Qatar, Ethiopia, and Kazakhstan. 
                This project directly connects INF token value to tangible hashrate power.
              </p>
            </div>

            <div className="row g-5">
              <div className="col-lg-6">
                <h4 className="text-white">Project Info</h4>
                <ul className="list-unstyled mt-3">
                  <li className="text-white">🔹 Project: INF Mining Phase 1</li>
                  <li className="text-white">🔹 Locations: Conakry (Guinea), Qatar, Kazakhstan, Ethiopia</li>
                  <li className="text-white">🔹 Equipment: Bitmain Antminer S21 Hydros</li>
                  <li className="text-white">🔹 Energy Infrastructure: Secured through Conakry partners</li>
                  <li className="text-white">🔹 Launch: Q2 2025</li>
                </ul>
              </div>

              <div className="col-lg-6">
                <h4 className="text-white">Token Allocation</h4>
                <ul className="list-unstyled mt-3">
                  <li className="text-white">🔹 Total Supply: 10,000,000 INF</li>
                  <li className="text-white">🔹 Mining Rewards: 40%</li>
                  <li className="text-white">🔹 Treasury Reserve: 20%</li>
                  <li className="text-white">🔹 Partnerships & Liquidity: 20%</li>
                  <li className="text-white">🔹 IDO Allocation: 10%</li>
                  <li className="text-white">🔹 Team Allocation: 10%</li>
                </ul>
              </div>
            </div>


            <FarmOverviewCharts />
            

            {/* Whitepaper Download */}
            <div className="text-center mt-5">
              <Link href="/whitepaper.pdf" className="default-btn">
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      

      {/* ================> Project Details End <================== */}
      <ApplyToLaunch />
    </>
  );
};

export default ProjectDetails;
