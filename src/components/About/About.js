import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Обо мне</h2>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Привет! Я Полина 👋</h3>
            <p>
              Фронтенд разработчик из Краснодара. В веб-разработке меня привлекает 
              возможность создавать полезные и красивые интерфейсы, которыми люди 
              пользуются каждый день.
            </p>
            <p>
              Мой путь начался с самостоятельного изучения HTML и CSS, а сейчас 
              я разрабатываю приложения на React и TypeScript. Постоянно учусь 
              новому и следую best practices.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Проектов</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Опыт разработки</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Любовь к коду</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Мой стек</h3>
            <div className="skills-icons">
              {skills.map((skill, i) => (
                <div className="skill-icon" key={i}>
                  <div className="icon-wrapper" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            
            <h4 style={{ marginTop: '2rem' }}>Сейчас изучаю</h4>
            <ul className="about-learning">
              <li>Next.js и серверный рендеринг</li>
              <li>Тестирование с Jest</li>
              <li>Анимации с Framer Motion</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;