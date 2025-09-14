'use client';

import { useState, useEffect } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animateSkills, setAnimateSkills] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Delay skill bar animations
                    setTimeout(() => setAnimateSkills(true), 500);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('skills');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            category: "Programming & Analytics",
            icon: "💻",
            skills: [
                { name: "Python", level: "Expert", percentage: 95 },
                { name: "SQL", level: "Expert", percentage: 90 },
                { name: "R", level: "Advanced", percentage: 85 },
                { name: "SAS", level: "Advanced", percentage: 85 },
                { name: "JavaScript", level: "Intermediate", percentage: 70 }
            ]
        },
        {
            category: "Visualization & BI",
            icon: "📊",
            skills: [
                { name: "Tableau", level: "Expert", percentage: 95 },
                { name: "Power BI", level: "Expert", percentage: 90 },
                { name: "Excel", level: "Expert", percentage: 95 },
                { name: "SAS Enterprise Miner", level: "Advanced", percentage: 85 },
                { name: "Matplotlib/Seaborn", level: "Advanced", percentage: 80 }
            ]
        },
        {
            category: "Machine Learning & AI",
            icon: "🤖",
            skills: [
                { name: "Scikit-learn", level: "Expert", percentage: 90 },
                { name: "TensorFlow", level: "Advanced", percentage: 80 },
                { name: "Regression Analysis", level: "Expert", percentage: 95 },
                { name: "Time Series Forecasting", level: "Expert", percentage: 95 },
                { name: "A/B Testing", level: "Advanced", percentage: 85 }
            ]
        }
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Expert': return '#10b981';
            case 'Advanced': return '#60a5fa';
            case 'Intermediate': return '#fbbf24';
            default: return '#6b7280';
        }
    };

    return (
        <section
            id="skills"
            style={{
                minHeight: '100vh',
                background: 'rgba(30, 41, 59, 0.8)',
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
                        Skills & Expertise
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
                        Technical proficiencies spanning analytics, visualization, and machine learning
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.category}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '2.5rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(20px)',
                                transition: 'all 0.4s ease',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                                transitionDelay: `${0.8 + (categoryIndex * 0.2)}s`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                                e.currentTarget.style.borderColor = '#60a5fa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            {/* Category Header */}
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '600',
                                    color: 'white',
                                    margin: 0,
                                }}>
                                    {category.category}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        {/* Skill Name and Level */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '0.5rem',
                                        }}>
                                            <span style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                            }}>
                                                {skill.name}
                                            </span>
                                            <span style={{
                                                color: getLevelColor(skill.level),
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                padding: '2px 8px',
                                                background: `${getLevelColor(skill.level)}20`,
                                                borderRadius: '12px',
                                                border: `1px solid ${getLevelColor(skill.level)}40`,
                                            }}>
                                                {skill.level}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div style={{
                                            width: '100%',
                                            height: '8px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '4px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                        }}>
                                            <div style={{
                                                height: '100%',
                                                background: `linear-gradient(90deg, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}80)`,
                                                borderRadius: '4px',
                                                width: animateSkills ? `${skill.percentage}%` : '0%',
                                                transition: `width 1.5s ease ${skillIndex * 0.1}s`,
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}>
                                                {/* Shimmer Effect */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: '-100%',
                                                    width: '100%',
                                                    height: '100%',
                                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                                                    animationName: animateSkills ? 'skillShimmer' : 'none',
                                                    animationDuration: '2s',
                                                    animationTimingFunction: 'ease',
                                                    animationIterationCount: 'infinite',
                                                    animationDelay: `${skillIndex * 0.2}s`,
                                                }} />
                                            </div>
                                        </div>

                                        {/* Percentage Display */}
                                        <div style={{
                                            textAlign: 'right',
                                            marginTop: '0.3rem',
                                        }}>
                                            <span style={{
                                                color: 'rgba(255, 255, 255, 0.6)',
                                                fontSize: '0.85rem',
                                                fontWeight: '500',
                                            }}>
                                                {animateSkills ? skill.percentage : 0}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Summary */}
                <div style={{
                    marginTop: '4rem',
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease 1.8s',
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
                        <h4 style={{
                            color: '#60a5fa',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                        }}>
                            Additional Expertise
                        </h4>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.6',
                            margin: 0,
                        }}>
                            Database Management (MySQL, MongoDB) • Statistical Modeling •
                            Business Intelligence • Data Visualization • Process Optimization •
                            Predictive Analytics • Financial Modeling
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes skillShimmer {
          0% { left: -100%; }
          100% { left: 100%; }
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

export default Skills;