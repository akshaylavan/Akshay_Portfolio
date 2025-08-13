import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Image animation
    tl.fromTo(imageRef.current,
      { scale: 0.8, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" }
    )
    
    // Content animation
    .fromTo(contentRef.current.children,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image" ref={imageRef}>
            <div className="image-placeholder">
              <div className="avatar">
                <span>A</span>
              </div>
            </div>
          </div>
          
          <div className="about-text" ref={contentRef}>
            <h3>Hello! I'm Akshay Lavan S</h3>
            <p>
              I'm a passionate Computer Science Engineering student at <strong>Kongu Engineering College</strong>, 
              currently in my final year with a strong focus on emerging technologies. My journey began with a 
              fascination for how technology can transform lives, and I've since developed expertise across 
              multiple domains - from full-stack development to mobile applications and design systems.
            </p>
            
            <p>
              As a <strong>Full Stack Developer</strong>, I thrive on building end-to-end solutions using modern 
              technologies like React, Node.js, and cloud platforms. My <strong>Flutter Development</strong> 
              expertise enables me to create cross-platform mobile applications with native performance. 
              Additionally, my proficiency in <strong>Graphics Design</strong> and <strong>Figma</strong> 
              allows me to conceptualize, prototype, and deliver pixel-perfect user experiences.
            </p>
            
            <div className="qualities">
              <div className="quality-item">
                <div className="quality-icon">💬</div>
                <div className="quality-text">
                  <h4>Strong Communication</h4>
                  <p>Excellent at collaborating with teams and explaining complex technical concepts clearly.</p>
                </div>
              </div>
              
              <div className="quality-item">
                <div className="quality-icon">🔄</div>
                <div className="quality-text">
                  <h4>Adaptability</h4>
                  <p>Quick to learn new technologies and adapt to changing project requirements.</p>
                </div>
              </div>
            </div>
            
            <p>
              Beyond technical skills, I'm deeply committed to continuous learning and innovation. I actively 
              participate in hackathons, contribute to open-source projects, and mentor junior developers. 
              My goal is to leverage technology to create meaningful impact, whether through sustainable 
              solutions, accessibility improvements, or educational initiatives that bridge the digital divide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
