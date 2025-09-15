'use client';

import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "metro-predictive-maintenance",
      title: "Predictive Maintenance – Metro do Porto",
      subtitle: "Preventing Railway Failures Through Advanced Analytics",
      description: "Analyzed 1.5M+ real-time sensor records from railway systems to forecast failures in braking and door components using advanced machine learning techniques.",
      technologies: ["SAS Enterprise Miner", "Python", "Neural Networks", "Time Series Analysis"],
      results: [
        "Analyzed 1.5M+ real-time sensor records from railway systems",
        "Reduced misclassification rate to 0.2351% using hybrid Neural Networks",
        "Implemented time-series preprocessing and regression techniques",
        "Delivered actionable maintenance insights via dashboards"
      ],
      impact: "Railway Safety",
      featured: true
    },
    {
      id: "olympic-analysis",
      title: "Olympic Games Data Analysis",
      subtitle: "Uncovering 120+ Years of Athletic Excellence",
      description: "Comprehensive analysis of 271K+ athlete and medal records, integrated with GDP and population data for comparative insights spanning Olympic history.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      results: [
        "Cleaned and transformed 271K+ athlete and medal records",
        "Integrated GDP and population data for comparative insights",
        "Identified key trends in hosting frequency and participation",
        "Created interactive visualizations highlighting sports patterns"
      ],
      impact: "Sports Analytics",
      featured: true
    },
    {
      id: "renewable-energy-india",
      title: "Renewable Energy & Economic Growth",
      subtitle: "Policy Insights for Sustainable Development",
      description: "Multi-variable regression analysis using 20 years of data on electricity access, CO2 emissions, and energy intensity to derive policy insights.",
      technologies: ["SAS", "Python", "Regression Analysis", "Statistical Modeling"],
      results: [
        "Conducted multi-variable regression using 20 years of data",
        "Analyzed electricity access, CO2 emissions, and energy intensity",
        "Performed model diagnostics (AIC/BIC, residual analysis)",
        "Derived actionable policy insights for sustainable energy growth"
      ],
      impact: "Policy Research",
      featured: true
    },
    {
      id: "community-development-research",
      title: "Community Development Research",
      subtitle: "Understanding Youth & Digital Media Impact",
      description: "Field research analyzing social media's impact on youth behavior, academic performance, and mental health through structured surveys.",
      technologies: ["Survey Research", "Statistical Analysis", "Field Study"],
      results: [
        "Conducted comprehensive field research on digital media impact",
        "Analyzed social media effects on youth behavior and mental health",
        "Collaborated with Lakshyam Foundation for data collection",
        "Presented actionable insights on digital wellness strategies"
      ],
      impact: "Social Research",
      featured: false
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Railway Safety': return '#10b981';
      case 'Sports Analytics': return '#60a5fa';
      case 'Policy Research': return '#f59e0b';
      case 'Social Research': return '#a855f7';
      default: return '#6b7280';
    }
  };

  return (
    <section 
      id="projects"
      style={{
        minHeight: '100vh',
        background: 'rgba(15, 23, 42, 0.9)',
        padding: '100px 1rem 50px 1rem', // Mobile-first padding
        position: 'relative',
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
      }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 8vw, 3rem)', // Better mobile scaling
            fontWeight: '700',
            color: 'white',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            Featured Projects
          </h2>
          <div style={{
            width: '80px', // Smaller on mobile
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #fbbf24)',
            margin: '0 auto',
            borderRadius: '2px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 0.8s ease 0.4s',
          }} />
          <p style={{
            fontSize: 'clamp(0.9rem, 4vw, 1.2rem)', // Better mobile scaling
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.6s',
            padding: '0 1rem', // Mobile padding
          }}>
            Real-world analytics projects driving meaningful business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr', // Single column on mobile
          gap: '2rem',
        }}
        className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: `${0.8 + (index * 0.1)}s`,
                cursor: 'pointer',
              }}
              className="project-card"
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) { // Only apply hover effects on desktop
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(1deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }
              }}
            >
              {/* Project Header */}
              <div style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white',
                padding: '2rem 1.5rem', // Mobile-friendly padding
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: getImpactColor(project.impact),
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: 'clamp(0.7rem, 3vw, 0.8rem)', // Responsive font size
                  fontWeight: '600',
                  maxWidth: '120px', // Prevent overflow on mobile
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}>
                  {project.impact}
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 5vw, 1.4rem)', // Responsive title
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  margin: 0,
                  paddingRight: '140px', // Account for impact badge
                  lineHeight: '1.3',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  opacity: 0.9,
                  fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)', // Responsive subtitle
                  margin: '0.5rem 0 0 0',
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Project Body */}
              <div style={{ padding: '2rem 1.5rem' }}> {/* Mobile-friendly padding */}
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', // Responsive description
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    color: '#60a5fa',
                    fontSize: 'clamp(0.8rem, 3vw, 0.9rem)', // Responsive section title
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Technologies Used
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: 'rgba(96, 165, 250, 0.2)',
                          color: '#60a5fa',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: 'clamp(0.75rem, 3vw, 0.85rem)', // Responsive tag font
                          fontWeight: '500',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          transition: 'all 0.3s ease',
                          wordBreak: 'break-word', // Prevent overflow
                        }}
                        onMouseEnter={(e) => {
                          if (window.innerWidth > 768) {
                            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.3)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (window.innerWidth > 768) {
                            e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 style={{
                    color: '#10b981',
                    fontSize: 'clamp(0.8rem, 3vw, 0.9rem)', // Responsive section title
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    Key Results
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        style={{
                          padding: '0.5rem 0',
                          color: 'rgba(255, 255, 255, 0.8)',
                          position: 'relative',
                          paddingLeft: '1.5rem',
                          lineHeight: '1.5',
                          fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)', // Responsive result text
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#10b981',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                        }}>
                          ✓
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 1.5s',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem 1.5rem', // Mobile-friendly padding
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h3 style={{
              color: '#60a5fa',
              fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', // Responsive CTA title
              fontWeight: '600',
              marginBottom: '1rem',
            }}>
              Interested in Learning More?
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', // Responsive CTA text
            }}>
              Each project represents a unique challenge solved through data-driven insights. 
              Let's discuss how similar approaches can drive results for your organization.
            </p>
            <button style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', // Responsive button text
              fontWeight: '600',
              transition: 'all 0.3s ease',
              minHeight: '48px', // Touch-friendly height
              minWidth: '200px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              View Project Details
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        /* Mobile: Single column */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .project-card {
            margin: 0 !important;
          }
          
          /* Disable hover effects on mobile */
          .project-card:hover {
            transform: none !important;
            box-shadow: none !important;
            background: rgba(255, 255, 255, 0.03) !important;
          }
        }

        /* Small mobile screens */
        @media (max-width: 480px) {
          section {
            padding: 60px 0.75rem 40px 0.75rem !important;
          }
          
          .projects-grid {
            gap: 1rem !important;
          }
        }

        /* Tablet: Two columns */
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }

        /* Desktop: Two columns with larger cards */
        @media (min-width: 1025px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          
          section {
            padding: 120px 2rem !important;
          }
        }

        /* Large desktop: Still two columns for better readability */
        @media (min-width: 1400px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem !important;
          }
        }

        /* Landscape mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          section {
            padding: 40px 1rem 30px 1rem !important;
          }
        }

        /* Improve touch interactions on mobile */
        @media (max-width: 768px) {
          .project-card {
            -webkit-tap-highlight-color: rgba(96, 165, 250, 0.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;