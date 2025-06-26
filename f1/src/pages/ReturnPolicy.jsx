import React from 'react';
import '../pages/returnpolicy.css';

const ReturnPolicy = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '120px' }}>
        <h1>Return & refund policy</h1>
        <section className="intro">
          <p>At Furninest, we want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, we offer a <strong>30-day return policy</strong> to ensure your satisfaction. Please read the following terms carefully to understand our return and refund process.</p>
        </section>

        <section className="return-policy">
          <h2>1. Return Policy</h2>
          <p>You may return most items within <strong>30 days</strong> of receiving your order. To be eligible for a return:</p>
          <ul>
            <li>The item must be in <strong>new and unused condition</strong> and in its original packaging.</li>
            <li>All tags, labels, and accessories (e.g., cushions, screws, instruction manuals) must be included.</li>
            <li>The item must not have been assembled or used in any way.</li>
          </ul>
        </section>

        <section className="non-returnable-items">
          <h2>2. Non-returnable Items</h2>
          <p>The following items are <strong>non-returnable</strong>:</p>
          <ul>
            <li>Customized or personalized items.</li>
            <li>Clearance or sale items (unless defective).</li>
            <li>Mattresses, pillows, and bedding.</li>
            <li>Items that have been assembled or altered.</li>
          </ul>
        </section>

        <section className="how-to-return">
          <h2>3. How to Return an Item</h2>
          <p>To return an item, please follow these steps:</p>
          <ul>
            <li><strong>Contact Us:</strong> Reach out to our customer service team at <a href="mailto:support@furninest.com">support@furninest.com</a> or call us at <strong>+044-678-3450</strong> to request a return authorization.</li>
            <li><strong>Provide Information:</strong> You will need to provide your order number, the item(s) you wish to return, and the reason for the return.</li>
            <li><strong>Pack the Item:</strong> Ensure that the item is securely packed in its original packaging to prevent damage during the return shipment.</li>
            <li><strong>Return Shipping:</strong> You will be responsible for paying the return shipping costs unless the item is defective or the return is due to our error.</li>
            <li><strong>Return Confirmation:</strong> Once your return is received and inspected, we will send you an email notification confirming the approval or rejection of your return.</li>
          </ul>
        </section>

        <section className="refund-policy">
          <h2>4. Refund Policy</h2>
          <p>After we receive and inspect your returned item, we will process your refund within <strong>5-7 business days</strong>. Refunds will be issued to the original payment method used for the purchase. Please note that shipping fees are non-refundable.</p>
        </section>

        <section className="damaged-or-defective-items">
          <h2>5. Damaged or Defective Items</h2>
          <p>If you received a damaged or defective item, please contact us immediately. We will arrange for a return and issue a full refund or replacement at no additional cost to you.</p>
        </section>

        <section className="contact-us">
          <h2>6. Contact Us</h2>
          <p>If you have any questions or need further assistance regarding our return and refund policy, feel free to contact our customer service team:</p>
          <p>Email: <a href="mailto:furninest@gmail.com">support@furninest.com</a></p>
          <p>Phone: +044-678-3450</p>
        </section>
      </div>
    </>
  );
};

export default ReturnPolicy;
