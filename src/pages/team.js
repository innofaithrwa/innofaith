
import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";

const teamMembers = [
  { name: "Stefan", role: "Developer", img: "/images/team/dev.png" },
  { name: "Harry", role: "Finance", img: "/images/team/finance.png" },
  { name: "Alleja", role: "Operations Manager", img: "/images/team/ops.png" },
  { name: "Marius", role: "Strategy & Marketing", img: "/images/team/strategy.png" },
  { name: "Robin", role: "Media & Design", img: "/images/team/design.png" },
  { name: "Alexandre", role: "Marketing Strategy", img: "/images/team/marketing.png" }
];

const Team = () => {
  return (
    <>
      <PageHeader title="Meet Our Team" text="Team" />

      {/* Hero under PageHeader */}
      <section className="hero-team text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold text-white">
            Built by believers in real-world blockchain
          </h1>
          <p className="text-white mt-3" style={{ fontSize: "18px", maxWidth: "720px", margin: "auto" }}>
            Our mission is to connect real infrastructure, people and energy with real token value — built on Bitcoin.
          </p>
        </div>
      </section>

      {/* Team section */}
      <section className="padding-top padding-bottom">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 col-lg-3">
                <div className="text-center" style={{
                  background: "rgba(255, 102, 196, 0.05)",
                  border: "1px solid rgba(255, 102, 196, 0.15)",
                  borderRadius: "12px",
                  padding: "25px"
                }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
                  />
                  <h5 className="text-white mb-1">{member.name}</h5>
                  <p className="text-pink mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplyToLaunch />
    </>
  );
};

export default Team;
