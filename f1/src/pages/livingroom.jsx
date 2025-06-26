import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';
import '../style.css';
import './LivingRoom.css';

// Import your living room furniture images
import ch1 from '../images/ch1.jpg';
import rabie from '../images/rabie.jpg';
import ch2 from '../images/ch2.jpg';
import arm from '../images/arm.jpg';
import sofa3 from '../images/sofa3.jpg';
import tab2 from '../images/tab2.jpg';
import tab3 from '../images/tab3.jpg';
import sofa2 from '../images/sofa2.jpg';
import sale from '../images/sale.jpg';

const LivingRoom = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  // Living room products data
  const livingRoomProducts = [
    
    { 
      id: 'sofa2', 
      name: 'Modern Sectional Sofa', 
      price: 'Rs.35000', 
      image: sofa2,
      category: 'sofas',
      description: 'L-shaped sectional sofa with adjustable headrests',
      discount: '15% OFF'
    },
    { 
      id: 'chair1', 
      name: 'Accent Armchair', 
      price: 'Rs.8500', 
      image: rabie,
      category: 'chairs',
      description: 'Stylish armchair with wooden legs and soft cushioning',
      discount: '10% OFF'
    },
    { 
      id: 'chair2', 
      name: 'Recliner Chair', 
      price: 'Rs.12000', 
      image: arm,
      category: 'chairs',
      description: 'Comfortable recliner with multiple positions',
      discount: '25% OFF'
    },
    { 
      id: 'coffeeTable', 
      name: 'Glass Coffee Table', 
      price: 'Rs.6000', 
      image: tab2,
      category: 'tables',
      description: 'Modern glass top coffee table with wooden base',
      discount: '5% OFF'
    },
    { 
      id: 'sofa3', 
      name: 'Wooden Bookshelf', 
      price: 'Rs.9000', 
      image: sofa3,
      category: 'sofas',
      description: 'Spacious bookshelf with 5 shelves',
      discount: '15% OFF'
    },
    { 
      id: 'coffeetable', 
      name: 'TV Entertainment Unit', 
      price: 'Rs.11500', 
      image: tab3,
      category: 'tables',
      description: 'TV unit with storage cabinets and display shelves',
      discount: '10% OFF'
    },
   
    { 
      id: 'chair3', 
      name: 'Side Table', 
      price: 'Rs.3500', 
      image: ch1,
      category: 'chairs',
      description: 'Compact side table with drawer',
      discount: '5% OFF'
    },
    { 
      id: 'chair4', 
      name: 'Floor Lamp', 
      price: 'Rs.2500', 
      image: ch2,
      category: 'chairs',
      description: 'Adjustable floor lamp with LED bulb included',
      discount: '15% OFF'
    },
    { 
      id: 'sofa4', 
      name: 'Area Rug 5x8', 
      price: 'Rs.7000', 
      image: sale,
      category: 'sofas',
      description: 'Soft area rug with modern pattern',
      discount: '20% OFF'
    }
  ];

  // Animation for products appearing
  useEffect(() => {
    // Show products with staggered delay for animation
    const timer = setTimeout(() => {
      setVisibleProducts(livingRoomProducts);
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
    <div className="living-room-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Living Room Collection</h1>
          <p>Transform your living space with our stylish and comfortable furniture</p>
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
            className={`filter-btn ${filterCategory === 'sofas' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('sofas')}
          >
            Sofas
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'chairs' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('chairs')}
          >
            Chairs
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'tables' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('tables')}
          >
            Tables
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

export default LivingRoom;
