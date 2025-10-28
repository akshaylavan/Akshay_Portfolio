import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const comingSoonRef = useRef(null);

  useEffect(() => {
    if (!projectsRef.current || !comingSoonRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate the coming soon message
    tl.fromTo(comingSoonRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Projects section coming soon</p>
        </div>
        
        <div ref={comingSoonRef} className="projects-coming-soon">
          <p>I'm currently working on some exciting projects that I can't wait to share with you. Please check back soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
