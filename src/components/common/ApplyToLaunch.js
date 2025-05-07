import Simple from "../base/Simple";
import Link from "next/link";

function ApplyToLaunch() {
  return (
    <section
      className="cta padding-bottom aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__content">
            <Simple
              subTitle="Ready to invest?"
              title="Buy INF Token Today"
            />
            <Link href="/buy-token" className="default-btn">
              Buy INF Token
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyToLaunch;
