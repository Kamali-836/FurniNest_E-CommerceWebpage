import React, { useState } from 'react';
import './pay.css';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    navigate('/thankyou');
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} × {item.quantity} - Rs. {item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h4>Total: Rs. {getCartTotal().toFixed(2)}</h4>
      </div>

      <div className="payment-methods">
        <h3>Select Payment Method:</h3>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="card" 
            checked={paymentMethod === 'card'} 
            onChange={() => setPaymentMethod('card')} 
          />
          Credit / Debit Card
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="upi" 
            checked={paymentMethod === 'upi'} 
            onChange={() => setPaymentMethod('upi')} 
          />
          UPI
        </label>
        <label>
          <input 
            type="radio" 
            name="method" 
            value="cod" 
            checked={paymentMethod === 'cod'} 
            onChange={() => setPaymentMethod('cod')} 
          />
          Cash on Delivery (COD)
        </label>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        {paymentMethod === 'card' && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name on Card"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {paymentMethod === 'upi' && (
          <input
            type="text"
            name="upiId"
            placeholder="Enter UPI ID (e.g. name@upi)"
            value={formData.upiId}
            onChange={handleInputChange}
            required
          />
        )}

        {paymentMethod === 'cod' && (
          <p>Cash on Delivery will be collected at the time of delivery.</p>
        )}

        <button type="submit" className="btn">
          Pay Rs. {getCartTotal().toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
