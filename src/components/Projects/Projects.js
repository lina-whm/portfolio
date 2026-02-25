import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Умный менеджер задач',
      desc: 'Продвинутое приложение для управления задачами с dark mode и drag-n-drop.',
      image: '/images/smart-task.jpg',
      tags: ['React', 'HTML', 'CSS'],
      github: 'https://github.com/lina-whm/smart-task-manager',
      demo: 'https://lina-whm.github.io/smart-task-manager/',
      category: 'react' 
    },
    {
      id: 2,
      title: 'Pixel Editor',
      desc: 'Редактор пиксель-арта с интуитивным интерфейсом и экспортом в PNG.',
      image: '/images/pixel-art-editor.png',
      tags: ['TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/lina-whm/pixel-art-editor',
      demo: 'https://lina-whm.github.io/pixel-art-editor/',
      category: 'ts'
    },
    {
      id: 3,
      title: 'Plant Identifier',
      desc: 'AI приложение для распознавания растений. Full-stack проект.',
      image: '/images/plant-identifier.png',
      tags: ['React', 'Node.js', 'API'],
      github: 'https://github.com/lina-whm/plant-identifier',
      demo: 'https://lina-whm.github.io/plant-identifier/',
      category: 'react' 
    },
    {
      id: 4,
      title: 'Конвертер валют',
      desc: 'PWA с графиками, темной темой и реальными курсами валют.',
      image: '/images/currency-converter.png',
      tags: ['React', 'TypeScript', 'PWA'],
      github: 'https://github.com/lina-whm/currency-converter',
      demo: 'https://lina-whm.github.io/currency-converter/',
      category: 'ts'
    },
    {
      id: 5,
      title: 'Прогноз погоды',
      desc: 'Красивое PWA с анимациями и детальным прогнозом.',
      image: '/images/weather-pwa.png',
      tags: ['React', 'TypeScript', 'API'],
      github: 'https://github.com/lina-whm/weather-pwa',
      demo: 'https://lina-whm.github.io/weather-pwa/',
      category: 'ts'
    }
  ];

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Проекты</h2>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            Все
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`} 
            onClick={() => setFilter('react')}
          >
            <FaReact /> React
          </button>
          <button 
            className={`filter-btn ${filter === 'ts' ? 'active' : ''}`} 
            onClick={() => setFilter('ts')}
          >
            <SiTypescript /> TypeScript
          </button>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub /> Код
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Демо
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag === 'React' && <FaReact />}
                      {tag === 'TypeScript' && <SiTypescript />}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;