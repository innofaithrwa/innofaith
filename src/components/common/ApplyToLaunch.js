import Simple from "../base/Simple";
import Link from "next/link";

function ApplyToLaunch() {
  return (
    <section
      className="cta padding-bottom py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #120022 0%, #1a0033 100%)",
      }}
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container relative z-10">
        <div
          className="cta__wrapper text-center max-w-3xl mx-auto p-10 rounded-3xl shadow-lg"
          style={{
            background: "rgba(255,255,255,0.05)",
            boxShadow: "0 0 40px rgba(165,94,255,0.3)",
            border: "1px solid rgba(165,94,255,0.3)",
          }}
        >
          <div className="cta__content">
            <Simple
              subTitle="Ready to invest?"
              title="Buy INF Token Today"
            />
            <Link
              href="/buy-token"
              className="inline-block mt-6 text-white font-semibold px-10 py-4 rounded-full transition-transform duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #a55eff 0%, #d37fff 100%)",
                boxShadow: "0 4px 20px rgba(165,94,255,0.5)",
                borderRadius: "9999px", // Ensures fully rounded button
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

        {/* Floating glow effect */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-3xl"
          style={{
            background: "rgba(165,94,255,0.3)",
          }}
        />
      </div>
    </section>
  );
}

export default ApplyToLaunch;
