import React, { useState } from "react";
import "./Support.css";

const Support = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="support-container">
      <h2 className="title">Support & Documentation</h2>

      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-item" onClick={() => toggleFaq(1)}>
          <p className="faq-question">How do I create a secure wallet?</p>
          {faqOpen === 1 && <p className="faq-answer">Use a trusted wallet provider and store your recovery phrase safely.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleFaq(2)}>
          <p className="faq-question">What are gas fees?</p>
          {faqOpen === 2 && <p className="faq-answer">Gas fees are transaction costs on the blockchain, varying with network congestion.</p>}
        </div>
        <div className="faq-item" onClick={() => toggleFaq(3)}>
          <p className="faq-question">How do I contact support?</p>
          {faqOpen === 3 && <p className="faq-answer">Use the contact form below or reach us via live chat.</p>}
        </div>
      </section>

      <section className="tutorials">
        <h3>Guides & Resources</h3>
        <div className="guides-container">
          <div className="guide-card">
            <h4>Beginner's Guide to Crypto</h4>
            <p>Learn the basics of cryptocurrencies, wallets, and transactions.</p>
            <button className="more-button more-button-link">
              VIEW MORE
            </button>
          </div>
          <div className="guide-card">
            <h4>Understanding Blockchain Transactions</h4>
            <p>A deep dive into how transactions are processed on the blockchain.</p>
            <button className="more-button more-button-link">
              VIEW MORE
            </button>
          </div>
          <div className="guide-card">
            <h4>Integrating Web3 into Your App</h4>
            <p>Step-by-step guide on integrating blockchain functionality into apps.</p>
            <button className="more-button more-button-link">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      <section className="contact">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Support;
