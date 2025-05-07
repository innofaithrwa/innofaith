import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CounterTwo = () => {
  const router = useRouter();

  const [counters, setCounters] = useState({
    raised: 565.1,
    investors: 120.0,
    projects: 1040,
    btcMined: 65.0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        raised: parseFloat((prev.raised + 0.1 + Math.random() * 0.3).toFixed(2)),
        investors: parseFloat((prev.investors + 0.05 + Math.random() * 0.1).toFixed(2)),
        projects: prev.projects + Math.floor(Math.random() * 3 + 1), // +1 tot +3
        btcMined: parseFloat((prev.btcMined + 0.02 + Math.random() * 0.05).toFixed(3)),
      }));
    }, 1000); // elke 1 seconde zichtbaar veranderen

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter__section counter__section--uplift">
      <div className="container">
        <div
          className="counter__wrapper aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-5 justify-content-center align-items-center">
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>${counters.raised.toFixed(2)}M</h3>
                <p>Total Amount Raised</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>{counters.investors.toFixed(2)}M+</h3>
                <p>Accredited Investors</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>{counters.projects}+</h3>
                <p>Hashrate Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter__item">
                <h3>{counters.btcMined.toFixed(3)}M</h3>
                <p>BTC Mined</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-white-50" style={{ fontStyle: "italic", fontSize: "14px" }}>
              Note: These figures are animated placeholders during the private pre-sale.
              Real-time blockchain-linked stats will activate post-launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
