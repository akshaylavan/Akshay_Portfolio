import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const achievementsRef = useRef(null);
  const cardsRef = useRef(null);

  const achievements = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      icon: '☁️',
      type: 'certification',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      credentialId: 'AWS-CCP-2023-001'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google Career Certificates',
      date: 'Oct 2023',
      icon: '🎨',
      type: 'certification',
      description: 'Comprehensive training in user experience design principles and methodologies.',
      credentialId: 'GUX-2023-456'
    },
    {
      title: 'Winner - Smart India Hackathon',
      issuer: 'Government of India',
      date: 'Sep 2023',
      icon: '🏆',
      type: 'achievement',
      description: 'First place in the Software Edition for developing an AI-powered healthcare solution.',
      prize: '₹1,00,000'
    },
    {
      title: 'Meta React Developer',
      issuer: 'Meta (Facebook)',
      date: 'Aug 2023',
      icon: '⚛️',
      type: 'certification',
      description: 'Advanced React.js development skills including hooks, context, and performance optimization.',
      credentialId: 'META-REACT-789'
    },
    {
      title: 'Best Innovation Award',
      issuer: 'Kongu Engineering College',
      date: 'Mar 2023',
      icon: '💡',
      type: 'achievement',
      description: 'Recognized for developing a blockchain-based student verification system.',
      prize: 'Gold Medal'
    },
    {
      title: 'Flutter Development Bootcamp',
      issuer: 'The App Brewery',
      date: 'Jan 2023',
      icon: '📱',
      type: 'certification',
      description: 'Complete Flutter development course covering iOS and Android app development.',
      credentialId: 'TAB-FLUTTER-321'
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: achievementsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Cards animation
    tl.fromTo(cardsRef.current.children,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="achievements" className="achievements section" ref={achievementsRef}>
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications, awards, and recognitions that validate my expertise and dedication
        </p>
        
        <div className="achievements-grid" ref={cardsRef}>
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card ${achievement.type}`}>
              <div className="achievement-header">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-type">
                  {achievement.type === 'certification' ? '📜 Certificate' : '🏆 Achievement'}
                </div>
              </div>
              
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-issuer">{achievement.issuer}</p>
              <span className="achievement-date">{achievement.date}</span>
              
              <p className="achievement-description">{achievement.description}</p>
              
              <div className="achievement-footer">
                {achievement.credentialId && (
                  <span className="credential-id">ID: {achievement.credentialId}</span>
                )}
                {achievement.prize && (
                  <span className="prize">🎁 {achievement.prize}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Awards Won</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6.88</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
