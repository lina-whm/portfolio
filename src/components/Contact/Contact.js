import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaTelegram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Скоро свяжусь с вами');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Связаться со мной</h2>
        
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Открыта к предложениям</h3>
              <p>
                Ищу интересные проекты и команду, где смогу расти как разработчик.
                Готова к сотрудничеству и новым вызовам.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon"><FaEnvelope /></div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:polina.nikolskaia@gmail.com">polina.nikolskaia@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-text">
                    <h4>Локация</h4>
                    <span>Краснодар, Россия</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Социальные сети</h4>
                <div className="social-icons">
                  <a href="https://github.com/lina-whm" target="_blank" rel="noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://t.me/li1nsd" target="_blank" rel="noreferrer" className="social-icon">
                    <FaTelegram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Ваше сообщение"
                    rows="5"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    required
                  />
                </div>
                <button type="submit" className="btn">Отправить сообщение</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;