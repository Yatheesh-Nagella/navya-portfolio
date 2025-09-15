'use client';

import { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'navyananduri25@gmail.com',
      link: 'mailto:navyananduri25@gmail.com'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/navya-nanduri',
      link: 'https://linkedin.com/in/navya-nanduri'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/NavyaNanduri',
      link: 'https://github.com/NavyaNanduri'
    }
  ];

  return (
    <section 
      id="contact"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))',
        padding: '100px 1rem 50px 1rem', // Mobile-friendly padding
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
            Let's Transform Data Into Impact Together
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
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '1.5rem',
            maxWidth: '600px',
            margin: '1.5rem auto 0',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.6s',
            padding: '0 1rem', // Mobile padding
          }}>
            Ready to unlock the power of your data? Let's discuss how analytics can drive your next breakthrough.
          </p>
        </div>

        {/* Main Contact Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column', // Stack vertically on mobile
          gap: '2rem',
          alignItems: 'stretch',
        }}
        className="contact-grid">
          
          {/* Contact Form */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.8s',
            order: 1, // Form first on mobile
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem 1.5rem', // Mobile-friendly padding
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
            }}>
              <h3 style={{
                color: '#60a5fa',
                fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', // Responsive font size
                fontWeight: '600',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.9rem', // Slightly smaller for mobile
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: 'clamp(0.9rem, 4vw, 1rem)', // Responsive font
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or how we can collaborate..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4} // Fewer rows on mobile
                    style={{
                      width: '100%',
                      padding: '0.9rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                      resize: 'vertical',
                      minHeight: '100px',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#60a5fa';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: submitStatus === 'success' 
                      ? 'linear-gradient(to right, #10b981, #059669)' 
                      : 'linear-gradient(to right, #2563eb, #7c3aed)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: 'clamp(0.9rem, 4vw, 1rem)',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? 'Sending... ⏳' : 
                   submitStatus === 'success' ? 'Message Sent! ✅' : 
                   'Send Message ✨'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 1s',
            order: 2, // Contact info second on mobile
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2rem 1.5rem', // Mobile-friendly padding
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              marginBottom: '2rem',
            }}>
              <h3 style={{
                color: '#60a5fa',
                fontSize: 'clamp(1.2rem, 5vw, 1.5rem)',
                fontWeight: '600',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                Get In Touch
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      cursor: info.link ? 'pointer' : 'default',
                    }}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      fontSize: '1.3rem', // Slightly smaller for mobile
                      minWidth: '35px',
                      textAlign: 'center',
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        color: '#60a5fa',
                        fontSize: 'clamp(0.8rem, 3.5vw, 0.9rem)',
                        fontWeight: '600',
                        marginBottom: '0.2rem',
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: 'clamp(0.8rem, 3.5vw, 0.95rem)',
                        wordBreak: 'break-all', // Prevent overflow on mobile
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem', // Mobile-friendly padding
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
            }}>
              <h4 style={{
                color: '#fbbf24',
                fontSize: 'clamp(1rem, 4.5vw, 1.2rem)',
                fontWeight: '600',
                marginBottom: '1rem',
              }}>
                Available For
              </h4>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'center',
              }}>
                {[
                  'Business Analytics Consulting',
                  'Data Science Projects',
                  'Speaking Engagements',
                  'Mentoring Opportunities'
                ].map((service) => (
                  <span
                    key={service}
                    style={{
                      background: 'rgba(251, 191, 36, 0.2)',
                      color: '#fbbf24',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: 'clamp(0.7rem, 3vw, 0.85rem)',
                      fontWeight: '500',
                      border: '1px solid rgba(251, 191, 36, 0.3)',
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        /* Desktop: Side by side layout */
        @media (min-width: 769px) {
          .contact-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
            flex-direction: row !important;
          }
          .contact-grid > div {
            order: unset !important;
          }
        }

        /* Mobile: Stack vertically */
        @media (max-width: 768px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }

        /* Tablet adjustments */
        @media (max-width: 1024px) and (min-width: 769px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;