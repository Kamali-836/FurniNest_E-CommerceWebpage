import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faStarHalfAlt, 
  faCartShopping, 
  faTruck, 
  faThumbsUp, 
  faUser,
  faSignInAlt,
  faUserPlus,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import 'swiper/css';
import '../style.css';
import 'swiper/css/pagination';
import rabie from '../images/rabie.jpg';
import r from '../images/r.jpg';
import p6 from '../images/p6.jpg';
import shel from '../images/shel.jpg';
import b2 from '../images/b2.jpg';
import cab from '../images/cab.jpg';
import kcab from '../images/kcab.jpg';
import p2 from '../images/p2.jpg';
import rec from '../images/rec.jpg';
import sale from '../images/sale.jpg';
import gr from '../images/gr.jpg';
import or from '../images/or.jpg';
import ch3 from '../images/ch3.jpg';
import tab4 from '../images/tab4.jpg';
import b4 from '../images/b4.jpg';
import bg6 from '../images/bg6.jpg';


// Define product data with unique IDs
const clearanceProducts = [
  { id: 'chair1', name: 'Comfort Chair', price: 'Rs.2000', image: rabie },
  { id: 'sofa1', name: 'Sofa', price: 'Rs.14500', image: r },
  { id: 'vase1', name: 'Vase Stand', price: 'Rs.4000', image: p6 },
  { id: 'shelf1', name: 'Shelf', price: 'Rs.7000', image: shel }
];

const exclusiveProducts = [
  { id: 'dining1', name: 'Mini Dining Table', price: 'Rs.4500', image: rec },
  { id: 'sofa2', name: 'Single-Mini Sofa', price: 'Rs.2500', image: p2 },
  { id: 'cabinet1', name: 'Entertainment Cabinet', price: 'Rs.10000', image: cab },
  { id: 'cabinet2', name: 'Kitchen Cabinet', price: 'Rs.7000', image: kcab }
];

const summerProducts = [
  { id: 'ch3', name: 'Single Chair', price: 'Rs.4500', image: ch3 },
  { id: 'tab4', name: 'User Table', price: 'Rs.2500', image: tab4 },
  { id: 'b4', name: 'Wooden Cot', price: 'Rs.10000', image: b4},
  { id: 'bg6', name: 'Rounded dining table', price: 'Rs.7000', image: bg6 }
];

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload(); // Refresh to update UI
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    
    // Show visual feedback on button
    setAddedToCart(prev => ({
      ...prev,
      [product.id]: true
    }));
    
    // Show notification
    setNotification({
      show: true,
      message: `${product.name} added to cart!`
    });
    
    // Reset visual feedback after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({
        ...prev,
        [product.id]: false
      }));
      
      setNotification({
        show: false,
        message: ''
      });
    }, 2000);
  };

  const renderProductSlide = (product) => (
    <SwiperSlide className="box" key={product.id}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">{product.price}</div>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>
      <button 
        onClick={() => handleAddToCart(product)} 
        className={`btn ${addedToCart[product.id] ? 'added' : ''}`}
      >
        {addedToCart[product.id] ? (
          <>
            <FontAwesomeIcon icon={faCheck} /> Added
          </>
        ) : (
          'Add to Cart'
        )}
      </button>
    </SwiperSlide>
  );

  return (
    <>
      {/* User Status Bar */}
      <div className="user-status-bar">
        {user ? (
          <div className="user-info">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <span>Welcome, {user.fullname}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="auth-link">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Link>
            <span className="divider">|</span>
            <Link to="/signup" className="auth-link">
              <FontAwesomeIcon icon={faUserPlus} /> Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Notification */}
      {notification.show && (
        <div className="cart-notification">
          <FontAwesomeIcon icon={faCheck} />
          <span>{notification.message}</span>
        </div>
      )}

      {/* Hero Slider Section */}
      <section className="home" id="home">
        <Swiper
          loop={true}
          spaceBetween={0}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          className="hero-slider"
        >
          <SwiperSlide className="slide slide-1">
  <div className="content">
    <h3><span>CLEARANCE</span> SALE</h3>
    <p>limited time offer</p>
    <p>Upto</p>
    <h3>50% OFF</h3>
    <h1></h1>
    <a href="#Clearancesale" className="btn">shop now</a>
  </div>
</SwiperSlide>

<SwiperSlide className="slide slide-2">
  <div className="content">
    <h3><span>SUMMER</span> COLLECTION</h3>
    <p>new arrivals</p>
    <p>Starting at</p>
    <h3>Rs.5000</h3>
    <h1></h1>
    <a href="#Summersale" className="btn">view collection</a>
  </div>
</SwiperSlide>

<SwiperSlide className="slide slide-3">
  <div className="content">
    <h3><span>EXCLUSIVE</span> DEALS</h3>
    <p>members only</p>
    <p>Save</p>
    <h3>30% OFF</h3>
    <h1></h1>
    <a href="#Exclusive" className="btn">shop now</a>
  </div>
</SwiperSlide>

        </Swiper>
      </section>
      
      {/* Categories Section */}
      <section className="categories" id="categories">
        <h1 className="heading">PRODUCT <span>CATEGORIES</span></h1>
        <div className="box-container">
          <div className="box">
            <img src={sale} alt="Living Room Furniture" />
            <h3>Living Room furniture</h3>
            <p>upto 50% off</p>
            <a href="/livingroom" className="btn">Shop Now</a>
          </div>

          <div className="box">
            <img src={gr} alt="Dining Room Furniture" />
            <h3>Dining Room furniture</h3>
            <p>upto 20% off</p>
            <a href="diningroom" className="btn">Shop Now</a>
          </div>

          <div className="box">
            <img src={or} alt="Office Room Furniture" />
            <h3>Office Room furniture</h3>
            <p>upto 30% off</p>
            <a href="/officeroom" className="btn">Shop Now</a>
          </div>

          <div className="box">
            <img src={b2} alt="Chairs" />
            <h3>Bedroom furniture</h3>
            <p>upto 15% off</p>
            <a href="/bedroom" className="btn">Shop Now</a>
          </div>
        </div>
      </section>

      {/* Clearance Sale Section */}
      <section className="products" id="Clearancesale">
        <h1 className="heading">CLEARANCE<span>SALE</span></h1>

        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="product-slider"
        >
          {clearanceProducts.map(product => renderProductSlide(product))}
        </Swiper>
      </section>

      {/* Exclusive Offer Section */}
      <section className="products" id="Exclusive">
        <h1 className="heading">EXCLUSIVE<span>OFFER</span></h1>

        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="product-slider"
        >
          {exclusiveProducts.map(product => renderProductSlide(product))}
        </Swiper>
      </section>

      {/* Summer Sale Section */}
      <section className="products" id="Summersale">
        <h1 className="heading">SUMMER<span>SALE</span></h1>

        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="product-slider"
        >
          {summerProducts.map(product => renderProductSlide(product))}
        </Swiper>
      </section>

      {/* Customer Reviews Section */}
      <section className="review" id="review">
        <h1 className="heading">CUSTOMER'S <span>REVIEW</span></h1>
        <Swiper
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="review-slider"
        >
          <SwiperSlide className="box">
            <p>"I recently purchased a dining set from Furninest, and I am incredibly impressed with the quality! The materials are sturdy, and the finish is flawless."</p>
            <h3>Srinaath</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="box">
            <p>"The modern sofa I bought from Furninest is exactly what my living room needed. It's stylish, comfortable, and perfectly matches my decor."</p>
            <h3>Shakthi</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="box">
            <p>"Fantastic experience! The customer service team was very helpful in guiding me through the buying process, and the delivery was prompt and hassle-free."</p>
            <h3>Subi</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </SwiperSlide>

          <SwiperSlide className="box">
            <p>"The design is sleek and contemporary, and it's so easy to clean. Couldn't be happier with the purchase!"</p>
            <h3>Abi</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container" id="offer">
          <div className="offer-row">
            <div className="offer-item">
              <FontAwesomeIcon icon={faCartShopping} className="offer-icon" />
              <div className="offer-text">
                <h5>Free Shipping</h5>
                <p>On order over USD 100</p>
              </div>
            </div>
            <div className="offer-item">
              <FontAwesomeIcon icon={faTruck} className="offer-icon" />
              <div className="offer-text">
                <h5>Fast Delivery</h5>
                <p>World wide</p>
              </div>
            </div>
            <div className="offer-item">
              <FontAwesomeIcon icon={faThumbsUp} className="offer-icon" />
              <div className="offer-text">
                <h5>Big Choice</h5>
                <p>Of product</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for cart notification */}
      <style jsx>{`
        .cart-notification {
          position: fixed;
          top: 80px;
          right: 20px;
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border-radius: 4px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          animation: slideIn 0.3s forwards;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .btn.added {
          background-color: #4CAF50;
        }
        
        .cart-count-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #e63946;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

export default Home;
