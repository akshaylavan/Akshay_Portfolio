import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef(null);

  const projects = [
    {
      title: 'Blockchain-based Authentication System',
      description: 'A revolutionary decentralized identity verification platform leveraging blockchain technology for secure, tamper-proof authentication. Features smart contract integration, multi-factor authentication, and zero-knowledge proofs for enhanced privacy.',
      tech: ['Solidity', 'Web3.js', 'JWT', 'MongoDB', 'Node.js', 'React'],
      icon: '🔐',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Smart Hospital Management System',
      description: 'An intelligent healthcare management platform with real-time patient monitoring, automated appointment scheduling, inventory management, and telemedicine integration. Built with microservices architecture and following Agile/Scrum methodologies.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker', 'AWS'],
      icon: '🏥',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'AI-Powered Email Intelligence System',
      description: 'An advanced machine learning system that automatically categorizes, prioritizes, and responds to emails using natural language processing. Features sentiment analysis, spam detection, and automated response generation with 95% accuracy.',
      tech: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'Redis', 'Docker'],
      icon: '🤖',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'RideShare Pro - Mobility Platform',
      description: 'A comprehensive ride-sharing ecosystem with advanced features like dynamic pricing, route optimization, driver analytics, multi-modal transport options, and carbon footprint tracking. Supports both iOS and Android with offline capabilities.',
      tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'WebRTC', 'ML Kit'],
      icon: '🚗',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Project cards animation
    tl.fromTo(cardsRef.current.children,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Hover animations for project cards
    gsap.utils.toArray('.project-card').forEach(card => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        .to(card.querySelector('.project-icon'), { rotation: 360, duration: 0.5 }, 0)
        .to(card.querySelector('.tech-tag'), { y: -5, stagger: 0.1, duration: 0.2 }, 0.1);
      
      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on that showcase my skills and passion for development
        </p>
        
        <div className="projects-grid" ref={cardsRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--card-gradient': project.color }}>
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
