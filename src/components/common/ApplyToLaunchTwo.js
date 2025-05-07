import Simple from "../base/Simple";
import Link from "next/link";

function ApplyToLaunchTwo() {
  return (
    <section
      className="cta padding-top padding-bottom aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration={1000}
      style={{
        background: "rgba(255, 102, 196, 0.08)",
        border: "1px solid rgba(255, 102, 196, 0.25)",
        borderRadius: "20px",
        margin: "0 auto",
        maxWidth: "800px",
        boxShadow: "0 0 40px rgba(255, 102, 196, 0.3)",
      }}
    >
      <div className="container">
        <div className="cta__wrapper text-center">
          <div className="cta__content">
            <Simple
              subTitle="Ready to invest?"
              title="Buy INF Token Today"
            />
            <Link href="/buy-token" className="default-btn mt-3">
              Buy INF Token
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyToLaunchTwo;
