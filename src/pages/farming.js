import PageHeader from "@/components/base/PageHeader";

const farms = [
  {
    name: "Guinea Farm (Conakry)",
    status: 30,
    statusText: "Energy cable partner secured • Location scouted • Awaiting legal clearance",
  },
  {
    name: "Qatar Farm",
    status: 45,
    statusText: "Mining-friendly zone confirmed • Equipment logistics underway • Energy plan drafted",
  },
  {
    name: "Kazakhstan Farm",
    status: 60,
    statusText: "Partnership with active mining farm • Planning infrastructure expansion",
  },
  {
    name: "Ethiopia Pilot",
    status: 25,
    statusText: "Discussions with grid operators started • Land contacts established • On hold until pre-sale closes",
  }
];

const Farming = () => {
  return (
    <>
      <PageHeader title="Farming" text="INF Mining Locations" />
      <section className="padding-top padding-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-white">Mining Deployment Status</h2>
            <p className="text-white mt-3">
              Below you’ll find our planned mining farms with real-world preparation progress. Final setup begins after the Private Pre-Sale round.
            </p>
          </div>

          <div className="row g-5">
            {farms.map((farm, index) => (
              <div key={index} className="col-md-6">
                <div
                  style={{
                    background: "rgba(255, 102, 196, 0.05)",
                    border: "1px solid rgba(255, 102, 196, 0.15)",
                    borderRadius: "12px",
                    padding: "25px"
                  }}
                >
                  <h4 className="text-white mb-3">{farm.name}</h4>
                  <p className="text-white mb-3">{farm.statusText}</p>
                  <div className="progress" style={{ height: "18px", backgroundColor: "#1f1f2a" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${farm.status}%`,
                        background: "linear-gradient(90deg, #ff66c4, #ff9ce3)",
                        borderRadius: "8px",
                        transition: "width 1.2s ease"
                      }}
                    >
                      <span className="ms-2 text-white fw-bold">{farm.status}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <p className="text-white">
              🛠 Final construction & activation of mining rigs will begin <strong>after Private Pre-Sale is completed</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Farming;
