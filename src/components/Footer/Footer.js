import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-links">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#about">Обо мне</a></li>
              <li><a href="#skills">Навыки</a></li>
              <li><a href="#projects">Проекты</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Контакты</h4>
            <ul>
              <li>Краснодар</li>
              <li>polina.nikolskaia@gmail.com</li>
              <li>@li1nsd</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {year} Проект для портфолио</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;