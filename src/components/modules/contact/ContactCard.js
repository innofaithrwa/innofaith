import React from "react";
import { useForm } from "react-hook-form";

function ContactCard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully");
        reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="padding-top padding-bottom bg-black text-white">
      <div className="container">
        <div
          style={{
            background: "rgba(255, 102, 196, 0.12)",
            border: "1px solid rgba(255, 102, 196, 0.4)",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 0 90px rgba(255, 0, 153, 0.6)",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h3 className="text-center mb-4">Contact Us</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-floating mb-3">
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control bg-transparent text-white border border-pink-400"
                id="contact-name"
                placeholder="Your Name"
              />
              <label htmlFor="contact-name" className="text-white">
                Full Name
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control bg-transparent text-white border border-pink-400"
                id="contact-email"
                placeholder="Email Address"
              />
              <label htmlFor="contact-email" className="text-white">
                Email Address
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                {...register("phone")}
                type="tel"
                className="form-control bg-transparent text-white border border-pink-400"
                id="contact-phone"
                placeholder="Phone Number"
              />
              <label htmlFor="contact-phone" className="text-white">
                Phone Number (optional)
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                {...register("subject", { required: true })}
                type="text"
                className="form-control bg-transparent text-white border border-pink-400"
                id="contact-subject"
                placeholder="Subject"
              />
              <label htmlFor="contact-subject" className="text-white">
                Subject
              </label>
            </div>

            <div className="form-floating mb-4">
              <textarea
                {...register("message", { required: true })}
                className="form-control bg-transparent text-white border border-pink-400"
                id="contact-message"
                placeholder="Your Message"
                style={{ height: "150px" }}
              />
              <label htmlFor="contact-message" className="text-white">
                Your Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="default-btn bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
