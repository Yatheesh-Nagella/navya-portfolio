'use client';

import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const philosophyPoints = [
    {
      title: "Accessibility",
      description: "Making complex data insights understandable for all stakeholders",
      icon: "🎯"
    },
    {
      title: "Impact", 
      description: "Focusing on analytics that drive real-world positive change",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "Bridging technical expertise with business acumen to create solutions that work",
      icon: "🤝"
    }
  ];

  return (
    <section 
      id="about"
      style={{
        minHeight: '100vh',
        background: 'rgba(15, 23, 42, 0.8)',
        padding: '120px 2rem',
        position: 'relative',
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
      }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3rem)',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            About Me
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #fbbf24)',
            margin: '0 auto',
            borderRadius: '2px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 0.8s ease 0.4s',
          }} />
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          
          {/* Story Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s ease 0.6s',
          }}>
            <div style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                My journey into business analytics began with a simple fascination: how do numbers tell stories that can change the world? During my undergraduate studies in Business Administration, I discovered that behind every successful business decision lies a foundation of data waiting to be understood and leveraged.
              </p>
              
              <p style={{ marginBottom: '1.5rem' }}>
                My path has taken me from analyzing seller performance data at Amazon in Hyderabad, where I helped improve customer experiences for thousands of marketplace partners, to pursuing advanced analytics education at the University of Central Oklahoma.
              </p>
              
              <p>
                What drives me is the belief that data analytics isn't just about numbers—it's about creating meaningful impact. Whether I'm developing predictive maintenance models that could prevent railway accidents or helping businesses optimize their operations, I see each project as an opportunity to make life better for real people.
              </p>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s ease 0.8s',
          }}>
            <div style={{
              width: '350px',
              height: '420px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.1rem',
              textAlign: 'center',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.5s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
              e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
            }}
            >
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Graduation Achievement</div>
                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>UCO Business Analytics</div>
                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>CGPA: 3.56</div>
              </div>
              
              {/* Shimmer Effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shimmer 3s linear infinite',
              }} />
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div style={{ marginTop: '6rem' }}>
          <h3 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 1s',
          }}>
            My Professional Philosophy
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {philosophyPoints.map((point, index) => (
              <div
                key={point.title}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${1.2 + (index * 0.2)}s`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}>
                  {point.icon}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#60a5fa',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}>
                  {point.title}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  textAlign: 'center',
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;