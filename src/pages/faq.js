import { useState } from "react";
import PageHeader from "@/components/base/PageHeader";
import ApplyToLaunch from "@/components/common/ApplyToLaunch";

const faqData = [
  {
    category: "general",
    question: "What is INF Token?",
    answer: "INF is a real-world asset (RWA) token backed by high-performance GPU infrastructure and Bitcoin Layer 1 technology through OP_NET.",
  },
  {
    category: "general",
    question: "How does OP_NET connect to Bitcoin?",
    answer: "OP_NET enables smart contracts directly on Bitcoin Layer 1 without compromising Bitcoin’s security model.",
  },
  {
    category: "token",
    question: "How can I participate in the INF token sale?",
    answer: "You can participate via our private and public pre-sales directly through our platform by connecting your OP_NET compatible wallet.",
  },
  {
    category: "token",
    question: "Will there be KYC required?",
    answer: "No KYC is required during the private sale. Public sales may require KYC depending on jurisdiction.",
  },
  {
    category: "investor",
    question: "How are GPU farms connected to INF token rewards?",
    answer: "INF rewards are directly linked to real-time compute power output from our verified GPU farm locations.",
  },
  {
    category: "investor",
    question: "Where are the GPU data centers located?",
    answer: "Our GPU-based data centers are being deployed across multiple international locations, including Guinea, Qatar, Kazakhstan, and Ethiopia.",
  },
  {
    category: "security",
    question: "Is my INF token secure?",
    answer: "Yes. INF tokens are secured via Bitcoin’s Proof of Work and OP_NET smart contract standards.",
  },
  {
    category: "security",
    question: "Which wallets will support INF?",
    answer: "INF will support OP_NET compatible wallets including Web3 ready light wallets. Official announcements coming soon.",
  }
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestion, setOpenQuestion] = useState(null);

  const filteredFaqs = faqData.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <>
      <PageHeader title="Frequently Asked Questions" text="FAQ" />

      <section className="padding-top padding-bottom">
        <div className="container">

          {/* Category Buttons */}
          <div className="text-center mb-5">
            <button className={`faq-button ${activeCategory === "general" ? "active" : ""}`} onClick={() => setActiveCategory("general")}>General Questions</button>
            <button className={`faq-button ${activeCategory === "token" ? "active" : ""}`} onClick={() => setActiveCategory("token")}>Token Sales</button>
            <button className={`faq-button ${activeCategory === "investor" ? "active" : ""}`} onClick={() => setActiveCategory("investor")}>Investor Guides</button>
            <button className={`faq-button ${activeCategory === "security" ? "active" : ""}`} onClick={() => setActiveCategory("security")}>Security</button>
          </div>

          {/* FAQ Items */}
          <div className="accordion" id="faqAccordion">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="accordion-item mb-3" style={{ backgroundColor: "rgba(255, 102, 196, 0.05)", border: "1px solid rgba(255, 102, 196, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => toggleQuestion(index)}
                    style={{
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "18px"
                    }}
                  >
                    {faq.question}
                  </button>
                </h2>
                {openQuestion === index && (
                  <div className="accordion-body p-4 text-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <ApplyToLaunch />
    </>
  );
};

export default Faq;
