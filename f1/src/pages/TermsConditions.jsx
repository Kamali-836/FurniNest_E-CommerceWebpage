import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/terms.css';

const TermsConditions = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '120px' }}>
        <h1>Terms and conditions</h1>
        <section className="intro">
          <p>Welcome to <strong>Furninest Furniture</strong>! These Terms and Conditions govern your use of our website, services, and products. By accessing or using our website, you agree to comply with these terms. Please read them carefully.</p>
        </section>
    
        <section className="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>By using our website, placing an order, or interacting with our services, you agree to abide by these Terms and Conditions. If you do not agree with these terms, you must refrain from using our website.</p>
        </section>
    
        <section className="changes-to-terms">
          <h2>2. Changes to Terms and Conditions</h2>
          <p>We reserve the right to modify, update, or change these Terms and Conditions at any time. Any changes will be posted on this page, and the new terms will be effective immediately upon posting. It is your responsibility to review these terms regularly.</p>
        </section>
    
        <section className="products-and-services">
          <h2>3. Products and Services</h2>
          <p>We offer furniture and related products for sale on our website. All products are subject to availability, and we reserve the right to limit quantities or refuse orders for any reason. Prices and availability may change without notice.</p>
        </section>
    
        <section className="order-acceptance">
          <h2>4. Order Acceptance and Cancellation</h2>
          <p>Your order is an offer to purchase. We reserve the right to accept or cancel orders at our discretion. If we cancel your order, you will be notified, and a full refund will be issued for any payments made.</p>
        </section>
    
        <section className="payment-terms">
          <h2>5. Payment Terms</h2>
          <p>Payments for products and services must be made using the available payment methods on our website. You agree to provide accurate payment information and authorize us to process payments for your orders. All prices are listed in the applicable currency and include taxes where applicable.</p>
        </section>
    
        <section className="shipping">
          <h2>6. Shipping and Delivery</h2>
          <p>We offer shipping to various locations. Shipping costs and delivery times will be calculated at checkout based on your location. We are not responsible for delays caused by third-party carriers or any events beyond our control.</p>
        </section>
    
        <section className="returns-and-refunds">
          <h2>7. Returns and Refunds</h2>
          <p>We offer a return and refund policy for eligible products. Please refer to our separate <Link to="/return">Return and Refund Policy</Link> for details on how to return items and receive a refund.</p>
        </section>
    
        <section className="intellectual-property">
          <h2>8. Intellectual Property</h2>
          <p>All content on our website, including text, images, logos, and trademarks, is the property of <strong>Furninest Furniture</strong> or its licensors. You may not use, copy, or distribute any content from our website without our permission, except as permitted by law.</p>
        </section>
    
        <section className="user-conduct">
          <h2>9. User Conduct</h2>
          <p>You agree not to use our website for any illegal or prohibited purposes. You are responsible for your conduct while using our services and agree not to engage in any activities that may harm our website, disrupt its services, or violate the rights of others.</p>
        </section>
    
        <section className="limitation-of-liability">
          <h2>10. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, <strong>Furninest Furniture</strong> will not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website, products, or services. Our liability is limited to the amount you paid for the product or service in question.</p>
        </section>
    
        <section className="privacy">
          <h2>11. Privacy Policy</h2>
          <p>Your privacy is important to us. Please refer to our <Link to="/privacy">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.</p>
        </section>
    
        <section className="governing-law">
          <h2>12. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of India. Any disputes or claims related to these terms will be resolved in the courts of Tamil Nadu.</p>
        </section>
    
        <section className="contact-us">
          <h2>13. Contact Us</h2>
          <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
          <p>Email: <a href="mailto:furninest@gmail.com">support@furninest.com</a></p>
          <p>Phone: +044-678-3450</p>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
