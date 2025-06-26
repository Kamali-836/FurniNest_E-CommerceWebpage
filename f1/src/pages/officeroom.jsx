import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';
import '../style.css';
import './officeroom.css';

// Import your office furniture images
import woc from '../images/woc.jpg';
import ch4 from '../images/ch4.jpg';
import ch5 from '../images/ch5.jpg';
import or from '../images/or.jpg';
import tab5 from '../images/tab5.jpg';
import shel from '../images/shel.jpg';
import tab2 from '../images/tab2.jpg';
import p6 from '../images/p6.jpg';
import ofc from '../images/ofc.jpg';

const OfficeRoom = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  // Office room products data
  const officeRoomProducts = [
    { 
      id: 'desk1', 
      name: 'Computer Desk', 
      price: 'Rs.15000', 
      image: tab5,
      category: 'desks',
      description: 'Modern computer desk with cable management system',
      discount: '15% OFF'
    },
    { 
      id: 'desk2', 
      name: 'Writing Desk', 
      price: 'Rs.12000', 
      image: or,
      category: 'desks',
      description: 'Minimalist writing desk with drawer storage',
      discount: '10% OFF'
    },
    { 
      id: 'officeChair1', 
      name: 'Task Chair', 
      price: 'Rs.8500', 
      image: woc,
      category: 'chairs',
      description: 'Adjustable office chair with lumbar support',
      discount: '20% OFF'
    },
    { 
      id: 'officeChair2', 
      name: 'Executive Chair', 
      price: 'Rs.14500', 
      image: ch4,
      category: 'chairs',
      description: 'Premium leather executive chair with high back',
      discount: '5% OFF'
    },
    { 
      id: 'bookshelf1', 
      name: 'Office Bookshelf', 
      price: 'Rs.9800', 
      image: shel,
      category: 'accessories',
      description: 'Tall bookshelf with adjustable shelves',
      discount: '25% OFF'
    },
    { 
      id: 'filingCabinet1', 
      name: 'Filing Cabinet', 
      price: 'Rs.7500', 
      image: ch5,
      category: 'chairs',
      description: '3-drawer filing cabinet with lock system',
      discount: '15% OFF'
    },
    { 
      id: 'deskLamp1', 
      name: 'LED Desk Lamp', 
      price: 'Rs.7500', 
      image: ofc,
      category: 'accessories',
      description: 'Adjustable LED desk lamp with USB charging port',
      discount: '10% OFF'
    },
    { 
      id: 'conferenceTable1', 
      name: 'Conference Table', 
      price: 'Rs.35000', 
      image: tab2,
      category: 'desks',
      description: 'Large conference table for 8-10 people',
      discount: '30% OFF'
    },
    { 
      id: 'executiveDesk1', 
      name: 'Executive Desk', 
      price: 'Rs.28000', 
      image: p6,
      category: 'accessories',
      description: 'L-shaped executive desk with built-in storage',
      discount: '5% OFF'
    }
    
  ];

  // Animation for products appearing
  useEffect(() => {
    // Show products with staggered delay for animation
    const timer = setTimeout(() => {
      setVisibleProducts(officeRoomProducts);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Filter products based on category
  const filteredProducts = filterCategory === 'all' 
    ? visibleProducts 
    : visibleProducts.filter(product => product.category === filterCategory);

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
    }, 2000);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({
        show: false,
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="office-room-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Office Furniture Collection</h1>
          <p>Professional furniture solutions for productive workspaces</p>
        </div>
      </div>

      {/* Notification */}
      {notification.show && (
        <div className="cart-notification">
          <FontAwesomeIcon icon={faCheck} />
          <span>{notification.message}</span>
        </div>
      )}

      {/* Filter Section */}
      <div className="filter-container">
        <h3>Filter by Category:</h3>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filterCategory === 'all' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'desks' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('desks')}
          >
            Desks
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'chairs' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('chairs')}
          >
            Chairs
          </button>
          
          <button 
            className={`filter-btn ${filterCategory === 'accessories' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('accessories')}
          >
            Accessories
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="product-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="discount-badge">{product.discount}</div>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <div className="price-cart">
                <span className="price">{product.price}</span>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className={`cart-btn ${addedToCart[product.id] ? 'added' : ''}`}
                >
                  {addedToCart[product.id] ? (
                    <>
                      <FontAwesomeIcon icon={faCheck} /> Added
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state if no products match filter */}
      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>No products found in this category</h3>
          <button className="btn" onClick={() => setFilterCategory('all')}>
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default OfficeRoom;
