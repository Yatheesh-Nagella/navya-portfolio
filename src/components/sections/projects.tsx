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
            Featured Projects
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
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.6s',
          }}>
            Real-world analytics projects driving meaningful business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
        }}>
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
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${0.8 + (index * 0.1)}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(2deg)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              {/* Project Header */}
              <div style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  background: getImpactColor(project.impact),
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                }}>
                  {project.impact}
                </div>
                
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  margin: 0,
                }}>
                  {project.title}
                </h3>
                <p style={{
                  opacity: 0.9,
                  fontSize: '0.95rem',
                  margin: '0.5rem 0 0 0',
                  fontWeight: '500',
                }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Project Body */}
              <div style={{ padding: '2.5rem' }}>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  fontSize: '1rem',
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    color: '#60a5fa',
                    fontSize: '0.9rem',
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
                          padding: '0.4rem 1rem',
                          borderRadius: '25px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(96, 165, 250, 0.3)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(96, 165, 250, 0.2)';
                          e.currentTarget.style.transform = 'translateY(0)';
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
                    fontSize: '0.9rem',
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
                          fontSize: '0.95rem',
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#10b981',
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
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
          marginTop: '4rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 1.5s',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h3 style={{
              color: '#60a5fa',
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1rem',
            }}>
              Interested in Learning More?
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
            }}>
              Each project represents a unique challenge solved through data-driven insights. 
              Let's discuss how similar approaches can drive results for your organization.
            </p>
            <button style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
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
        @media (max-width: 768px) {
          section {
            padding: 80px 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;