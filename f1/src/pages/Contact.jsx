import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios
import '../pages/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to the backend API
      const response = await axios.post('/api/contact', formData);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormMessage('Your message has been sent successfully! We will get back to you shortly.');
      setFormError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError(error.response?.data?.message || 'There was an error submitting your form. Please try again later.');
      setFormMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container" style={{marginTop: '120px'}}>
        <h1>Contact Us</h1>
        
        {formMessage && (
          <div className="form-success">
            <p>{formMessage}</p>
          </div>
        )}
        
        {formError && (
          <div className="form-error">
            <p>{formError}</p>
          </div>
        )}

        <form id="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
          <input
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
          <input
            type="text"
            id="subject"
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter the subject of your message"
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
          <input 
            type="submit" 
            value={isSubmitting ? "Sending..." : "Send Message"} 
            disabled={isSubmitting} 
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
