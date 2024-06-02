import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Order Now</h4>
          <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Keerai</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Other Links</h4>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get In Touch</h4>
          <ul>
            <li>29, Reddy St, Nerkundram, Chennai - 600107</li>
            <li>+91 91767 20068</li>
            <li>info@jasfruitsandvegetables.in</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Copyright JAS Fruits and Vegetables. All Rights Reserved</p>
        <p>Design and Developed by Chennai Notes</p>
      </div>
      <img src="https://craftingagreenworld.com/wp-content/uploads/2023/09/fun-mixed-fruit-basket-coloring-pages-4.png" alt="Fruit" className="footer-fruit-image-right" />
      <img src="https://www.indiaparenting.com/coloring-pages/uploads/600004fdc3956.jpg" alt="Fruit" className="footer-fruit-image-left" />
    </footer>
  );
};

export default Footer
