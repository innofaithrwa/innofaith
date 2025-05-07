import PageHeader from "@/components/base/PageHeader";
import NewsLetter from "@/components/partials/NewsLetter";
import { useState } from "react";

const ApplyProject = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    wallet: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Your request has been sent.");
        setForm({ name: "", email: "", wallet: "", amount: "" });
      } else {
        const data = await response.json();
        alert("Failed to send request: " + data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <PageHeader title="Buy INF Token" text="Secure your mining-backed tokens" />

      {/* ================== Uitleg Blok =================== */}
      <section className="padding-top padding-bottom">
        <div className="container text-center mb-5">
          <div
            style={{
              background: "rgba(255, 102, 196, 0.12)",
              border: "1px solid rgba(255, 102, 196, 0.4)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 0 60px rgba(255, 102, 196, 0.35)",
              color: "white",
              maxWidth: "800px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <h2 className="text-white mb-3">Monthly Profit Sharing</h2>
            <p>
              As a holder of the INF utility token, you are entitled to a monthly profit share
              derived from Bitcoin mining operations within our ecosystem.
            </p>
            <p className="mt-3">
              To ensure long-term commitment and fairness, all rewards are calculated monthly
              but paid out every 6 months, based on your average INF balance during that period.
              A minimum of 1000 INF must be held to qualify.
            </p>
            <p className="mt-3">
              Our transparent system ensures every token holder can participate in the real-world
              economy of digital mining, powered by INF.
            </p>
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140px",
                height: "60px",
                background: "rgba(255, 102, 196, 0.4)",
                filter: "blur(45px)",
                zIndex: 0,
              }}
            />
          </div>
        </div>

        {/* ================== How to Buy =================== */}
        <div className="container text-center mb-5">
          <h2 className="text-white mb-3">How to Buy INF</h2>
          <ol className="list-decimal list-inside text-left mx-auto max-w-xl text-white space-y-2">
            <li>Create a Bitcoin wallet (Xverse, UniSat, or other BRC-20 compatible wallets).</li>
            <li>Fill out the form below with your wallet address and desired amount.</li>
            <li>Our team will reach out with payment instructions for the private sale.</li>
          </ol>
        </div>

        {/* ================== Form Blok =================== */}
        <div className="container">
          <div
            style={{
              background: "rgba(255, 102, 196, 0.12)",
              border: "1px solid rgba(255, 102, 196, 0.4)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 0 60px rgba(255, 102, 196, 0.35)",
              maxWidth: "700px",
              margin: "0 auto",
              color: "white",
              position: "relative",
            }}
          >
            <h3 className="text-center text-white mb-4">Request Purchase</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent text-white border border-pink-400"
                  id="buy-name"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="buy-name" className="text-white">Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control bg-transparent text-white border border-pink-400"
                  id="buy-email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="buy-email" className="text-white">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent text-white border border-pink-400"
                  id="buy-wallet"
                  name="wallet"
                  placeholder="Bitcoin Wallet Address"
                  value={form.wallet}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="buy-wallet" className="text-white">Bitcoin Wallet Address</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="number"
                  className="form-control bg-transparent text-white border border-pink-400"
                  id="buy-amount"
                  name="amount"
                  placeholder="Amount in INF"
                  value={form.amount}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="buy-amount" className="text-white">Amount (INF)</label>
              </div>

              <div className="text-center">
                <button className="default-btn bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded">
                  Submit Purchase Request
                </button>
              </div>
            </form>

            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "160px",
                height: "60px",
                background: "rgba(255, 102, 196, 0.4)",
                filter: "blur(45px)",
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </section>

      <NewsLetter />
    </>
  );
};

export default ApplyProject;
