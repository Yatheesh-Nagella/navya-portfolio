'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50px',
        padding: '15px 30px',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 4px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fbbf24';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Navya
        </button>

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '25px' }}>
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Skills', id: 'skills' },
            { label: 'Projects', id: 'projects' },
            { label: 'Contact', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '8px 15px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;