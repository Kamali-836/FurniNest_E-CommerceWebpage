import React from 'react';
import '../pages/about.css';

const About = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '120px' }}>
        <h1>About Us</h1>
    
        <section className="about-section">
          <div className="about-content">
            <img src="https://via.placeholder.com/300" alt="Company Image" className="about-image left-image" />
            <div className="text">
              <h2>Our Story</h2>
              <p>Furninest Furniture was founded with a vision to create high-quality, beautifully designed furniture that helps turn houses into homes. Our journey began with a passionate team of furniture enthusiasts who believed that every piece of furniture should tell a story. We started small, crafting pieces by hand, paying attention to every detail, and striving to meet the unique needs of our customers. Over time, we expanded our operations and began to incorporate modern manufacturing techniques without compromising our commitment to craftsmanship. Today, we proudly offer an extensive range of furniture, from classic to contemporary, that enhances the beauty and functionality of any living space.</p>
            </div>
          </div>
        </section>
    
        <section className="about-section">
          <div className="about-content">
            <div className="text">
              <h2>Our Values</h2>
              <p>At Furninest, we are driven by our core values of sustainability, quality, and customer satisfaction. We are committed to using responsibly sourced materials and sustainable manufacturing processes to reduce our environmental footprint. We work closely with skilled artisans who share our passion for creating furniture that combines beauty with practicality. Our dedication to quality is evident in every product we produce. We understand that furniture is an investment in your home, and we aim to offer long-lasting solutions that not only look great but also stand the test of time. Above all, we value our customers, and our mission is to deliver personalized service and ensure that every interaction with our brand exceeds expectations.</p>
            </div>
            <img src="https://via.placeholder.com/300" alt="Company Image" className="about-image right-image" />
          </div>
        </section>
    
        <section className="about-section">
          <div className="about-content">
            <img src="https://via.placeholder.com/300" alt="Company Image" className="about-image left-image" />
            <div className="text">
              <h2>Looking Ahead</h2>
              <p>As we continue to grow, we are constantly evolving to meet the changing needs of our customers and the furniture industry. We are committed to staying ahead of design trends and incorporating innovative materials and technologies into our products. Our goal is to bring new, exciting designs to the market while maintaining the high standards of craftsmanship and durability that our customers have come to expect. We are also focused on expanding our reach globally, making our furniture accessible to people across different cultures and lifestyles. Ultimately, our vision is to become a trusted global leader in the furniture industry, offering exceptional products that inspire customers to create spaces they love.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
