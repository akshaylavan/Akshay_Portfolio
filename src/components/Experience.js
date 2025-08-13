import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'TechCorp Solutions',
      period: 'Jun 2024 - Present',
      location: 'Remote',
      description: 'Developing scalable web applications using React.js and Node.js. Implemented microservices architecture and optimized database queries, resulting in 40% performance improvement.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      type: 'work'
    },
    {
      title: 'Mobile App Developer',
      company: 'StartupHub Incubator',
      period: 'Jan 2024 - May 2024',
      location: 'Coimbatore, TN',
      description: 'Led the development of cross-platform mobile applications using Flutter. Collaborated with UI/UX designers to create intuitive user interfaces and integrated real-time features.',
      skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git'],
      type: 'work'
    },
    {
      title: 'UI/UX Design Freelancer',
      company: 'Various Clients',
      period: 'Aug 2023 - Dec 2023',
      location: 'Freelance',
      description: 'Designed user interfaces for web and mobile applications serving 10+ clients. Created wireframes, prototypes, and design systems using Figma, increasing client satisfaction by 95%.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
      type: 'freelance'
    },
    {
      title: 'Computer Science Engineering',
      company: 'Kongu Engineering College',
      period: '2021 - 2025',
      location: 'Erode, Tamil Nadu',
      description: 'Pursuing B.E. in Computer Science Engineering with focus on Software Development, Data Structures, Algorithms, and Emerging Technologies. Current CGPA: 8.7/10',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
      type: 'education'
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Timeline items animation
    tl.fromTo(timelineRef.current.children,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getTypeIcon = (type) => {
    switch(type) {
      case 'work': return '💼';
      case 'freelance': return '🚀';
      case 'education': return '🎓';
      default: return '📍';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'work': return '#667eea';
      case 'freelance': return '#f093fb';
      case 'education': return '#43e97b';
      default: return '#764ba2';
    }
  };

  return (
    <section id="experience" className="experience section" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          My journey through professional experiences, freelance projects, and academic achievements
        </p>
        
        <div className="timeline" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" style={{'--item-color': getTypeColor(exp.type)}}>
              <div className="timeline-marker">
                <span className="timeline-icon">{getTypeIcon(exp.type)}</span>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <div className="timeline-meta">
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-location">📍 {exp.location}</span>
                </div>
                
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-skills">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
