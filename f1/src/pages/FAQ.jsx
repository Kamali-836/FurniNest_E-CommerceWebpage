import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/faq.css';

const FAQ = () => {
  // Function to toggle FAQ answers
  const toggleAnswer = (e) => {
    const answer = e.target.parentNode.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: '120px' }}>
        <h1>Frequently Asked Questions</h1>
        <section className="faq-section">
          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>1. What types of furniture do you offer?</h3>
            </div>
            <div className="faq-answer">
              <p>We offer a wide variety of furniture, including living room sets, bedroom furniture, dining tables and chairs, office furniture, and outdoor pieces. Our collection includes both modern and traditional designs to suit all tastes and home styles.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>2. How do I place an order?</h3>
            </div>
            <div className="faq-answer">
              <p>You can place an order directly on our website. Browse through our collections, select the items you want to purchase, and proceed to checkout. We offer multiple payment methods including credit/debit cards and online wallets for your convenience.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>3. Do you offer free shipping?</h3>
            </div>
            <div className="faq-answer">
              <p>Yes, we offer free standard shipping on all orders within the country. For international orders, shipping charges may apply. You can view the exact shipping fees during the checkout process.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>4. Can I return or exchange an item?</h3>
            </div>
            <div className="faq-answer">
              <p>Yes, we have a hassle-free return and exchange policy. You can return or exchange an item within 30 days of receiving it, provided it is in its original condition and packaging. Please refer to our <Link to="/return">Return & Refund Policy</Link> for more details.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>5. How do I track my order?</h3>
            </div>
            <div className="faq-answer">
              <p>Once your order has been shipped, you will receive an email with tracking information. You can track your shipment through the carrier's website or by using the tracking number provided.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={toggleAnswer}>
              <h3>6. Do you offer customization for furniture pieces?</h3>
            </div>
            <div className="faq-answer">
              <p>Yes, we offer customization options on many of our furniture pieces. You can choose from a variety of fabrics, finishes, and sizes to create the perfect piece for your home. Please contact us for more information about custom orders.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
