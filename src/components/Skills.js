import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const technicalRef = useRef(null);
  const softRef = useRef(null);

  const technicalSkills = [
    { name: 'Full Stack Development', level: 92, icon: '🌐' },
    { name: 'Flutter Development', level: 88, icon: '📱' },
    { name: 'React.js & Node.js', level: 90, icon: '⚛️' },
    { name: 'Figma & UI/UX Design', level: 85, icon: '🎨' },
    { name: 'Database Management', level: 87, icon: '🗄️' },
    { name: 'Cloud Technologies', level: 83, icon: '☁️' }
  ];

  const softSkills = [
    { name: 'Leadership', level: 88, icon: '👑' },
    { name: 'Communication', level: 94, icon: '💬' },
    { name: 'Critical Thinking', level: 91, icon: '🧠' },
    { name: 'Project Management', level: 86, icon: '📊' },
    { name: 'Mentoring', level: 89, icon: '🎯' },
    { name: 'Innovation', level: 93, icon: '💡' }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Technical skills animation
    tl.fromTo(technicalRef.current.children,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    )
    
    // Soft skills animation
    .fromTo(softRef.current.children,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.6"
    );

    // Animate skill bars
    gsap.utils.toArray('.skill-bar-fill').forEach((bar, i) => {
      const level = bar.dataset.level;
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderSkillCard = (skill, index) => (
    <div key={index} className="skill-card">
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <h4 className="skill-name">{skill.name}</h4>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-bar-fill" 
          data-level={skill.level}
        ></div>
      </div>
      <span className="skill-percentage">{skill.level}%</span>
    </div>
  );

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-grid" ref={technicalRef}>
              {technicalSkills.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-grid" ref={softRef}>
              {softSkills.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
