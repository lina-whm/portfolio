import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '#home' },
    { name: 'Обо мне', href: '#about' },
    { name: 'Навыки', href: '#skills' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <a key={item.name} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="social-icons">
            <a href="https://github.com/lina-whm" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;