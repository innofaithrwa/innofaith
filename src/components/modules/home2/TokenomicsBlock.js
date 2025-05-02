import TokenomicsChart from "@/components/common/TokenomicsChart";

const TokenomicsBlock = () => {
  return (
    <section className="token padding-top padding-bottom">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <h2 className="text-white text-center mb-4" style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "1px" }}>
                TOKENOMICS
              </h2>
            </div>
          </div>
        </div>

        <div className="token__wrapper">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              <TokenomicsChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsBlock;
