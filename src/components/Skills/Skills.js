import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
    ]},
    { category: 'Инструменты', items: [
      { name: 'Git', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'Webpack', level: 60 },
      { name: 'VS Code', level: 90 },
    ]},
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Навыки</h2>
        
        <div className="skills-container">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{cat.category}</h3>
              {cat.items.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="description-card">
            <h3>Мой подход</h3>
            <p>
              Пишу чистый, поддерживаемый код. Следую современным стандартам 
              и всегда тестирую на разных устройствах. Верю, что хороший 
              интерфейс должен быть интуитивным.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;