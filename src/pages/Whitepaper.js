import React from "react";
import PageHeader from "@/components/base/PageHeader";
import Head from "next/head";

const Whitepaper = () => {
  return (
    <>
      <Head>
        <title>Innofaith | Whitepaper</title>
      </Head>

      <PageHeader title="Whitepaper" text="See how the INF token connects real-world mining to Bitcoin." />

      <section className="padding-top padding-bottom bg--dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-white mb-3">INF Whitepaper</h2>
            <p className="text-white">
              The whitepaper outlines the Innofaith (INF) token structure, tokenomics, ecosystem
              design and roadmap — including how real-world mining hashpower backs the INF token.
            </p>
          </div>

          <div className="text-center">
            <a
              href="/documents/whitepaper.pdf"
              className="default-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Whitepaper PDF</span>
            </a>
          </div>

          <div className="text-white mt-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h4>Contents Overview:</h4>
            <ul>
              <li>✔️ Project Introduction & Vision</li>
              <li>✔️ Token Utility and Use Cases</li>
              <li>✔️ Emission, Treasury, and Mining Model</li>
              <li>✔️ Roadmap & Partnerships</li>
              <li>✔️ Off-Chain Venture Buffer</li>
              <li>✔️ Hashrate-Backed Token Framework</li>
            </ul>

            <p className="mt-4">
              For questions or partnership inquiries, please contact us via the contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitepaper;
