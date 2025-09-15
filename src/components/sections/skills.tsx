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
                        Skills & Expertise
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
                        Technical proficiencies spanning analytics, visualization, and machine learning
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr', // Single column on mobile
                    gap: '2rem',
                }}
                className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.category}
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '2rem 1.5rem', // Mobile-friendly padding
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
                                e.currentTarget.style.transform = 'translateY(-5px)'; // Less movement on mobile
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
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
                                    fontSize: 'clamp(2rem, 6vw, 2.5rem)', // Responsive icon size
                                    marginBottom: '1rem',
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{
                                    fontSize: 'clamp(1.2rem, 5vw, 1.4rem)', // Responsive title
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
                                            flexWrap: 'wrap', // Allow wrapping on very small screens
                                            gap: '0.5rem',
                                        }}>
                                            <span style={{
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontSize: 'clamp(0.9rem, 3.5vw, 1rem)', // Responsive font size
                                                fontWeight: '500',
                                            }}>
                                                {skill.name}
                                            </span>
                                            <span style={{
                                                color: getLevelColor(skill.level),
                                                fontSize: 'clamp(0.8rem, 3vw, 0.9rem)', // Responsive font size
                                                fontWeight: '600',
                                                padding: '2px 8px',
                                                background: `${getLevelColor(skill.level)}20`,
                                                borderRadius: '12px',
                                                border: `1px solid ${getLevelColor(skill.level)}40`,
                                                whiteSpace: 'nowrap',
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
                                                fontSize: 'clamp(0.75rem, 3vw, 0.85rem)', // Responsive font size
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
                    marginTop: '3rem',
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s ease 1.8s',
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
                        <h4 style={{
                            color: '#60a5fa',
                            fontSize: 'clamp(1rem, 4.5vw, 1.2rem)', // Responsive title
                            fontWeight: '600',
                            marginBottom: '1rem',
                        }}>
                            Additional Expertise
                        </h4>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.6',
                            margin: 0,
                            fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', // Responsive font size
                        }}>
                            Database Management (MySQL, MongoDB) • Statistical Modeling •
                            Business Intelligence • Data Visualization • Process Optimization •
                            Predictive Analytics • Financial Modeling
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations and Responsive Styles */}
            <style jsx>{`
                @keyframes skillShimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }

                /* Mobile: Single column */
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                }

                /* Tablet: Two columns */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 2rem !important;
                    }
                }

                /* Desktop: Three columns */
                @media (min-width: 1025px) {
                    .skills-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 2rem !important;
                    }
                    
                    section {
                        padding: 120px 2rem !important;
                    }
                }

                /* Very small mobile screens */
                @media (max-width: 480px) {
                    section {
                        padding: 60px 0.75rem 40px 0.75rem !important;
                    }
                    
                    .skills-grid {
                        gap: 1rem !important;
                    }
                }

                /* Landscape mobile */
                @media (max-width: 768px) and (orientation: landscape) {
                    section {
                        padding: 40px 1rem 30px 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;