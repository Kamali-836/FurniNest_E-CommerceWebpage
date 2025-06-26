import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../CartContext';
import '../style.css';
import './bedroom.css';

// Import your bedroom furniture images
import b1 from '../images/b1.jpg';
import dres1 from '../images/dres1.jpg';
import b2 from '../images/b2.jpg';
import dres2 from '../images/dres2.jpg';
import dres3 from '../images/dres3.jpg';
import b3 from '../images/b3.jpg';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.png';


const Bedroom = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');

  // Bedroom products data
  const bedroomProducts = [
    { 
      id: 'bed1', 
      name: 'Queen Size Bed', 
      price: 'Rs.35000', 
      image: b1,
      category: 'beds',
      description: 'Elegant queen size bed with wooden headboard',
      discount: '15% OFF'
    },
    { 
      id: 'bed2', 
      name: 'King Size Bed', 
      price: 'Rs.45000', 
      image: b2,
      category: 'beds',
      description: 'Luxurious king size bed with upholstered frame',
      discount: '10% OFF'
    },
    { 
      id: 'nightstand1', 
      name: 'Bedside Table', 
      price: 'Rs.6500', 
      image: dres1,
      category: 'tables',
      description: 'Compact nightstand with drawer and open shelf',
      discount: '20% OFF'
    },
    { 
      id: 'dresser1', 
      name: 'Double beds', 
      price: 'Rs.18500', 
      image: b6,
      category: 'dbeds',
      description: '5-drawer dresser with mirror attachment',
      discount: '5% OFF'
    },
    { 
      id: 'wardrobe1', 
      name: 'Wooden bed', 
      price: 'Rs.29800', 
      image: b3,
      category: 'beds',
      description: 'Spacious wardrobe with hanging space and shelves',
      discount: '25% OFF'
    },
    { 
      id: 'vanity1', 
      name: 'Dressing Table', 
      price: 'Rs.16500', 
      image: dres2,
      category: 'tables',
      description: 'Modern vanity table with large mirror and stool',
      discount: '15% OFF'
    },
    { 
      id: 'mattress1', 
      name: 'Memory Foam Mattress', 
      price: 'Rs.22500', 
      image: dres3,
      category: 'tables',
      description: 'Premium memory foam mattress for restful sleep',
      discount: '10% OFF'
    },
    { 
      id: 'bedding1', 
      name: 'Luxury Bedding Set', 
      price: 'Rs.8000', 
      image: b5,
      category: 'dbeds',
      description: 'Complete bedding set with duvet, sheets and pillowcases',
      discount: '30% OFF'
    }
  ];

  // Animation for products appearing
  useEffect(() => {
    // Show products with staggered delay for animation
    const timer = setTimeout(() => {
      setVisibleProducts(bedroomProducts);
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
    <div className="bedroom-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Bedroom Collection</h1>
          <p>Create your perfect sanctuary with our elegant bedroom furniture</p>
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
            className={`filter-btn ${filterCategory === 'beds' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('beds')}
          >
            Beds
          </button>

          <button 
            className={`filter-btn ${filterCategory === 'dbeds' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('dbeds')}
          >
            Double Beds
          </button>
          
          <button 
            className={`filter-btn ${filterCategory === 'tables' ? 'active' : ''}`} 
            onClick={() => setFilterCategory('tables')}
          >
            Dressing Tables
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

export default Bedroom;
