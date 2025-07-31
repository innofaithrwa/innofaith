import Simple from "../base/Simple";
import Link from "next/link";

function ApplyToLaunchTwo() {
  return (
    <section
      className="cta padding-top padding-bottom aos-init aos-animate"
      data-aos="fade-up"
      data-aos-duration={1000}
      style={{
        background: "linear-gradient(90deg, #0b0f1c 0%, #1c2845 100%)",
        border: "1px solid rgba(63,169,245,0.25)",
        borderRadius: "20px",
        margin: "60px auto",
        maxWidth: "850px",
        padding: "40px 20px",
        boxShadow: "0 0 35px rgba(63,169,245,0.3)",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="cta__wrapper">
          <div className="cta__content">
            <Simple
              subTitle={
                <span style={{ color: "#4AC4FF", fontWeight: "500" }}>
                  Ready to invest?
                </span>
              }
              title={
                <span
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 12px rgba(63,169,245,0.5)",
                    fontSize: "28px",
                    fontWeight: "600",
                  }}
                >
                  Buy INF Token Today
                </span>
              }
            />
            <p
              style={{
                color: "#c8d8f5",
                marginTop: "10px",
                fontSize: "15px",
                maxWidth: "550px",
                marginInline: "auto",
                opacity: 0.9,
              }}
            >
              Secure your early position in the first Bitcoin Layer 1 RWA token.
              Transparent, verifiable, and backed by real GPU compute power.
            </p>
            <Link
              href="/buy-token"
              className="default-btn mt-4"
              style={{
                background: "linear-gradient(90deg, #3FA9F5 0%, #4AC4FF 100%)",
                padding: "14px 36px",
                borderRadius: "9999px",
                fontWeight: "600",
                boxShadow: "0 4px 18px rgba(63,169,245,0.4)",
                display: "inline-block",
                marginTop: "18px",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Buy INF Token
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyToLaunchTwo;
