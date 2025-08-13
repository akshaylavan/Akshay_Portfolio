import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './Hero.css';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hero background animation
    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    
    // Name animation - slide in from left
    .fromTo(nameRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    
    // Role typing animation
    .fromTo(roleRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.5,
        onComplete: () => {
          gsap.to(roleRef.current, {
            duration: 3,
            text: "Full Stack Developer | Flutter Developer | Graphics Designer | Figma Expert",
            ease: "none"
          });
        }
      }
    )
    
    // Description fade in
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=1"
    )
    
    // CTA buttons animation
    .fromTo(ctaRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );

    // Floating animation for the hero content
    gsap.to('.hero-content', {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 ref={nameRef} className="hero-name">
            Hi, I'm <span className="name-highlight">Akshay Lavan S</span>
          </h1>
          
          <div ref={roleRef} className="hero-role">
            {/* Text will be animated here */}
          </div>
          
          <p ref={descRef} className="hero-description">
            A passionate Computer Science Engineering student at Kongu Engineering College, 
            dedicated to crafting innovative digital experiences through cutting-edge technology, 
            elegant design, and creative problem-solving. Let's build the future together!
          </p>
          
          <div ref={ctaRef} className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <button className="btn btn-outline" onClick={scrollToContact}>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
