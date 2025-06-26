import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';
import '../style.css';
import './diningroom.css';

// Import your dining room furniture images
import kcab from '../images/kcab.jpg';
import k1 from '../images/k1.jpg';
import ch2 from '../images/ch2.jpg';
import k2 from '../images/k2.jpg';
import k3 from '../images/k3.jpg';
import d1 from '../images/d1.jpg';
import tab6 from '../images/tab6.jpg';
import d2 from '../images/d2.jpg';
import d3 from '../images/d3.jpg';

const DiningRoom = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  // Dining room products data
  const diningRoomProducts = [
    { 
      id: 'diningTable1', 
      name: 'Elegant Dining Table', 
      price: 'Rs.28000', 
      image: d3,
      category: 'dinnerware',
      description: 'Solid wood dining table with seating for 6 people',
      discount: '15% OFF'
    },
    
    { 
      id: 'buffet1', 
      name: 'Modern Buffet Cabinet', 
      price: 'Rs.18500', 
      image: k3,
      category: 'storage',
      description: 'Spacious buffet cabinet with multiple drawers and compartments',
      discount: '25% OFF'
    },
    { 
      id: 'buffet2', 
      name: 'Traditional Sideboard', 
      price: 'Rs.22000', 
      image: k2,
      category: 'storage',
      description: 'Elegant sideboard with ample storage for dinnerware',
      discount: '15% OFF'
    },
    { 
      id: 'chandelier', 
      name: 'Dining Room Chandelier', 
      price: 'Rs.12500', 
      image: d1,
      category: 'dinnerware',
      description: 'Statement chandelier perfect for dining areas',
      discount: '10% OFF'
    },
    { 
      id: 'diningRug', 
      name: 'Folding table', 
      price: 'Rs.8000', 
      image: tab6,
      category: 'chairs',
      description: 'Stain-resistant area rug designed for dining spaces',
      discount: '30% OFF'
    },
    { 
      id: 'serverCart', 
      name: 'Kitchen cabinet', 
      price: 'Rs.7500', 
      image: k1,
      category: 'storage',
      description: 'Mobile serving cart with wine rack and storage',
      discount: '5% OFF'
    },
    { 
      id: 'barStool', 
      name: 'Kitchen Bar Stool', 
      price: 'Rs.4200', 
      image: kcab,
      category: 'chairs',
      description: 'Height-adjustable bar stool with footrest',
      discount: '15% OFF'
    },
    { 
      id: 'chinaSet', 
      name: 'Porcelain Dinnerware Set', 
      price: 'Rs.9500', 
      image: d2,
      category: 'dinnerware',
      description: 'Complete 24-piece dinnerware set for 6 people',
      discount: '20% OFF'
    },
    { 
      id: 'centerpiece', 
      name: 'Table Centerpiece', 
      price: 'Rs.2800', 
      image: ch2,
      category: 'chairs',
      description: 'Elegant centerpiece for dining table decoration',
      discount: '25% OFF'
    }
  ];

  // Animation for products appearing
  useEffect(() => {
    // Show products with staggered delay for animation
    const timer = setTimeout(() => {
      setVisibleProducts(diningRoomProducts);
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
    <div className="dining-room-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Dining Room Collection</h1>
          <p>Create memorable dining experiences with our elegant furniture</p>
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
            className={`filter-btn ${filterCategory === 'chairs' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('chairs')}
          >
            Chairs
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'storage' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('storage')}
          >
            Storage
          </button>
          <button 
            className={`filter-btn ${filterCategory === 'dinnerware' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('dinnerware')}
          >
            Dinnerware
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

export default DiningRoom;
