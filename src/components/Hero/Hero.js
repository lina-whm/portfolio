import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Привет, я <span className="highlight">Полина</span>
              <br />Frontend разработчик
            </h1>
            <p className="hero-subtitle">
              Создаю современные веб-приложения с фокусом на пользовательский опыт
              и чистый код. React, TypeScript, JavaScript.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">
                <FaDownload /> Связаться
              </a>
              <a href="#projects" className="btn btn-outline">
                Проекты <FaArrowRight />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="code-snippet">
              <pre>
{`const Polina = {
  role: 'Frontend Developer',
  stack: ['React', 'TypeScript', 'JS'],
  passion: 'Clean code & UX',
  location: 'Краснодар'
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;