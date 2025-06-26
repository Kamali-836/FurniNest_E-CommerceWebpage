import React from 'react';
import '../pages/privacy.css';

const Privacy = () => {
  return (
    <div className="container" style={{marginTop: '120px'}}>
      <h1>Privacy Policy</h1>
      
      <section className="intro">
        <p>Welcome to Furninest Furniture! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.</p>
      </section>

      <section className="information-collection">
        <h2>1. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and billing details.</li>
          <li><strong>Usage Data:</strong> IP address, browser type, and pages visited on our website.</li>
          <li><strong>Payment Information:</strong> Credit card details when purchasing products.</li>
        </ul>
      </section>

      <section className="how-we-use">
        <h2>2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Process and complete your orders.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Improve our website's functionality and user experience.</li>
          <li>Send promotional emails or newsletters (with your consent).</li>
        </ul>
      </section>

      <section className="cookies">
        <h2>3. Cookies</h2>
        <p>We use cookies to enhance your experience on our website. Cookies help us analyze website traffic and improve functionality. You can control cookie preferences through your browser settings.</p>
      </section>

      <section className="data-sharing">
        <h2>4. Data Sharing</h2>
        <p>We will not share your personal information with third parties except in the following cases:</p>
        <ul>
          <li>With service providers who help process orders and provide services.</li>
          <li>If required by law or to protect our rights and property.</li>
        </ul>
      </section>

      <section className="data-security">
        <h2>5. Data Security</h2>
        <p>We implement security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.</p>
      </section>

      <section className="user-rights">
        <h2>6. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. If you'd like to exercise these rights, please contact us using the contact information below.</p>
      </section>

      <section className="contact-info">
        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p>Email: <a href="mailto:furninest@gmail.com">support@furninest.com</a></p>
        <p>Phone: +044-678-3450</p>
      </section>
    </div>
  );
};

export default Privacy;
