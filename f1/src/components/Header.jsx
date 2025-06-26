// Header.jsx - Update with cart functionality
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { routesConfig } from '../AllRoutes';
import '../style.css';
import '../components/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, faSearch, faShoppingCart, faBed, 
  faUser, faTrash, faTimes, faCheckCircle, faExclamationCircle 
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';

const Header = () => {
  // Use cart context
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useCart();

  // State for UI components
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [shoppingCartActive, setShoppingCartActive] = useState(false);
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const [forgotPasswordActive, setForgotPasswordActive] = useState(false);
  const [createAccountActive, setCreateAccountActive] = useState(false);
  const [userType, setUserType] = useState('user');
  
  // State for form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [resetEmail, setResetEmail] = useState('');
  const [signupData, setSignupData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // State for response messages
  const [responseMessage, setResponseMessage] = useState({
    type: '',
    message: '',
    show: false
  });

  // Reset all form data
  const resetAllForms = () => {
    // Bug fix: Clear all form data when toggling between forms
    setLoginData({ email: '', password: '' });
    setResetEmail('');
    setSignupData({ fullname: '', email: '', password: '', confirmPassword: '' });
  };

  // Toggle functions
  const toggleSearchForm = () => {
    setSearchFormActive(!searchFormActive);
    setShoppingCartActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
    // Bug fix: Reset forms when closing or switching between components
    resetAllForms();
  };

  const toggleShoppingCart = () => {
    setShoppingCartActive(!shoppingCartActive);
    setSearchFormActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
    // Bug fix: Reset forms when closing or switching between components
    resetAllForms();
  };

  const toggleLoginForm = () => {
    setLoginFormActive(!loginFormActive);
    setSearchFormActive(false);
    setShoppingCartActive(false);
    setNavbarActive(false);
    setForgotPasswordActive(false);
    setCreateAccountActive(false);
    // Bug fix: Reset forms when toggling login form
    resetAllForms();
  };

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
    setSearchFormActive(false);
    setShoppingCartActive(false);
    setLoginFormActive(false);
    // Bug fix: Reset forms when closing or switching between components
    resetAllForms();
  };

  const showForgotPassword = () => {
    setForgotPasswordActive(true);
    setLoginFormActive(false);
    setCreateAccountActive(false);
    // Bug fix: Reset forms when switching to forgot password
    resetAllForms();
  };

  const showCreateAccount = () => {
    setCreateAccountActive(true);
    setLoginFormActive(false);
    setForgotPasswordActive(false);
    // Bug fix: Reset forms when switching to create account
    resetAllForms();
  };

  const backToLogin = () => {
    setLoginFormActive(true);
    setForgotPasswordActive(false);
    setCreateAccountActive(false);
    // Bug fix: Reset forms when going back to login
    resetAllForms();
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  // Form input handlers
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission handlers
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        ...loginData,
        userType
      });
      
      // Show success message
      setResponseMessage({
        type: 'success',
        message: response.data.message,
        show: true
      });
      
      // Store user data in localStorage or context
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Reset form and close it after delay
      setLoginData({ email: '', password: '' });
      setTimeout(() => {
        setLoginFormActive(false);
        setResponseMessage({ type: '', message: '', show: false });
      }, 2000);
      
    } catch (error) {
      setResponseMessage({
        type: 'error',
        message: error.response?.data?.message || 'Login failed',
        show: true
      });
      
      setTimeout(() => {
        setResponseMessage({ type: '', message: '', show: false });
      }, 3000);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (signupData.password !== signupData.confirmPassword) {
      setResponseMessage({
        type: 'error',
        message: 'Passwords do not match',
        show: true
      });
      return;
    }
    
    try {
      const response = await axios.post('/api/signup', {
        fullname: signupData.fullname,
        email: signupData.email,
        password: signupData.password,
        userType
      });
      
      // Show success message
      setResponseMessage({
        type: 'success',
        message: response.data.message,
        show: true
      });
      
      // Reset form and go back to login after delay
      setSignupData({ fullname: '', email: '', password: '', confirmPassword: '' });
      setTimeout(() => {
        backToLogin();
        setResponseMessage({ type: '', message: '', show: false });
      }, 2000);
      
    } catch (error) {
      setResponseMessage({
        type: 'error',
        message: error.response?.data?.message || 'Registration failed',
        show: true
      });
      
      setTimeout(() => {
        setResponseMessage({ type: '', message: '', show: false });
      }, 3000);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', {
        email: resetEmail
      });
      
      // Show success message
      setResponseMessage({
        type: 'success',
        message: response.data.message,
        show: true
      });
      
      // Reset form and go back to login after delay
      setResetEmail('');
      setTimeout(() => {
        backToLogin();
        setResponseMessage({ type: '', message: '', show: false });
      }, 2000);
      
    } catch (error) {
      setResponseMessage({
        type: 'error',
        message: error.response?.data?.message || 'Password reset request failed',
        show: true
      });
      
      setTimeout(() => {
        setResponseMessage({ type: '', message: '', show: false });
      }, 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setSearchFormActive(false);
      setShoppingCartActive(false);
      setLoginFormActive(false);
      setNavbarActive(false);
      setForgotPasswordActive(false);
      setCreateAccountActive(false);
      // Bug fix: Reset all form data when closing forms due to scrolling
      resetAllForms();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <FontAwesomeIcon icon={faBed} size="1x"/>FurniNest
      </a>

      <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
        <a href="/Home">Home</a>
        <a href="/livingroom">Living room</a>
        <a href="/diningroom">Dining room</a>
        <a href="/bedroom">Bedroom</a>
        <a href="/officeroom">Office room</a>
        <a href="#review">Review</a>
        <a href="/Contact">Contact Us</a>
      </nav>
      
      <div className="icons">
        <div id="menu-btn" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div id="search-btn" onClick={toggleSearchForm}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div id="cart-btn" onClick={toggleShoppingCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {getCartCount() > 0 && (
            <span className="cart-count-badge">{getCartCount()}</span>
          )}
        </div>
        <div id="login-btn" onClick={toggleLoginForm}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      
      <form action="" className={`search-form ${searchFormActive ? 'active' : ''}`}>
  <input 
    type="search" 
    id="search-box" 
    placeholder="search here..." 
  />
  <label htmlFor="search-box">
    <FontAwesomeIcon icon={faSearch} />
  </label>
</form>
      
      <div className={`shopping-cart ${shoppingCartActive ? 'active' : ''}`}>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(item => (
              <div className="box" key={item.id}>
                <FontAwesomeIcon 
                  icon={faTrash} 
                  onClick={() => removeFromCart(item.id)} 
                  className="remove-item"
                />
                <img src={item.image} alt={item.name} />
                <div className="content">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price} × {item.quantity}</span>
                </div>
              </div>
            ))}
            <div className="total">total: Rs.{getCartTotal().toFixed(2)}/-</div>
            <a href="/pay" className="btn">checkout</a>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <a href="#categories" className="btn" onClick={() => setShoppingCartActive(false)}>
              Shop Now
            </a>
          </div>
        )}
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className={`login-form ${loginFormActive ? 'active' : ''}`}>
        <h3>Login Now</h3>
        <div className="user-type-selection">
          <label>
            <input 
              type="radio" 
              name="userType" 
              value="user" 
              checked={userType === 'user'} 
              onChange={() => handleUserTypeChange('user')}
            /> User
          </label>
          <label>
            <input 
              type="radio" 
              name="userType" 
              value="admin" 
              checked={userType === 'admin'} 
              onChange={() => handleUserTypeChange('admin')}
            /> Admin
          </label>
        </div>
        <input 
          type="email" 
          name="email"
          value={loginData.email}
          onChange={handleLoginChange}
          placeholder="your email" 
          className="box" 
          required 
        />
        <input 
          type="password" 
          name="password"
          value={loginData.password}
          onChange={handleLoginChange}
          placeholder="your password" 
          className="box" 
          required 
        />
        <p>forget your password <a href="#" onClick={(e) => {e.preventDefault(); showForgotPassword();}}>click here</a></p>
        <p>don't have an account <a href="#" onClick={(e) => {e.preventDefault(); showCreateAccount();}}>create now</a></p>
        <input type="submit" value={`login as ${userType}`} className="btn" />
      </form>

      {/* Forgot Password Popup */}
      <div className={`popup-overlay ${forgotPasswordActive ? 'active' : ''}`}>
        <div className="popup-content">
          <div className="popup-close" onClick={backToLogin}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <h3>Reset Password</h3>
          <form onSubmit={handleResetPassword}>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <input 
              type="email" 
              placeholder="your email" 
              className="box" 
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required 
            />
            <input type="submit" value="Reset Password" className="btn" />
            <p>Remember your password? <a href="#" onClick={(e) => {e.preventDefault(); backToLogin();}}>Back to login</a></p>
          </form>
        </div>
      </div>

      {/* Create Account Popup */}
      <div className={`popup-overlay ${createAccountActive ? 'active' : ''}`}>
        <div className="popup-content">
          <div className="popup-close" onClick={backToLogin}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <h3>Create Account</h3>
          <form onSubmit={handleSignup}>
            <div className="user-type-selection">
              <label>
                <input 
                  type="radio" 
                  name="newUserType" 
                  value="user" 
                  checked={userType === 'user'} 
                  onChange={() => handleUserTypeChange('user')}
                /> User
              </label>
              <label>
                <input 
                  type="radio" 
                  name="newUserType" 
                  value="admin" 
                  checked={userType === 'admin'} 
                  onChange={() => handleUserTypeChange('admin')}
                /> Admin
              </label>
            </div>
            <input 
              type="text" 
              name="fullname"
              value={signupData.fullname}
              onChange={handleSignupChange}
              placeholder="your name" 
              className="box" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              placeholder="your email" 
              className="box" 
              required 
            />
            <input 
              type="password" 
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              placeholder="your password" 
              className="box" 
              required 
            />
            <input 
              type="password" 
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              placeholder="confirm password" 
              className="box" 
              required 
            />
            <input type="submit" value={`Register as ${userType}`} className="btn" />
            <p>Already have an account? <a href="#" onClick={(e) => {e.preventDefault(); backToLogin();}}>Login now</a></p>
          </form>
        </div>
      </div>

      {/* Response Messages */}
      {responseMessage.show && (
        <div className={`response-message ${responseMessage.type} active`}>
          <div className="message">
            <FontAwesomeIcon icon={responseMessage.type === 'success' ? faCheckCircle : faExclamationCircle} />
            <p>{responseMessage.message}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
