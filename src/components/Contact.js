import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      link: 'mailto:akshaylavan783@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: 'https://www.linkedin.com/in/akshay-lavan-s/',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: '🐱',
      link: 'https://github.com/akshaylavan',
      color: '#333'
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Form animation
    tl.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    
    // Social links animation
    .fromTo(socialRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Show success animation
    gsap.to('.contact-form', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's collaborate and create something amazing together! Feel free to reach out for any opportunities or just to say hello.
        </p>
        
        <div className="contact-content">
          <div className="contact-form-container" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <h3>Connect with me</h3>
            <p>
              I'm always excited to collaborate on innovative projects, discuss emerging technologies, 
              or explore opportunities in full-stack development, mobile app development, and UI/UX design. 
              Let's connect and create something extraordinary together!
            </p>
            
            <div className="social-links" ref={socialRef}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Kongu Engineering College, Tamil Nadu, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <span>Computer Science Engineering Student</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <span>Open to full-time opportunities, internships, and collaborative projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Akshay Lavan S. Crafted with ❤️, innovation, and endless ☕</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
