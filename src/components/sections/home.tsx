'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.6)';
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(96, 165, 250, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #1e293b, #334155)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '50px',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{ 
        maxWidth: '1200px',
        width: '100%',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr', // swapped columns
        gap: '3rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 3,
      }}>
        {/* Enhanced Profile Image - Left Side */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'relative',
            transition: 'transform 0.3s ease',
          }}>
            {/* Glowing ring background */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(135deg, #60a5fa, #c084fc, #fbbf24)',
              borderRadius: '50%',
              opacity: 0.3,
              filter: 'blur(20px)',
              animation: 'pulse 3s ease-in-out infinite',
            }} />
            {/* Main Profile Image */}
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
            }}>
              <img
                src="/images/Head-shot.jpg"
                alt="Navya Nanduri"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* Floating tech icons */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              animation: 'float 4s ease-in-out infinite',
              boxShadow: '0 10px 30px rgba(96, 165, 250, 0.3)',
            }}>
              📊
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              animation: 'float 4s ease-in-out infinite 2s',
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
            }}>
              🤖
            </div>
          </div>
        </div>
        {/* Enhanced Text Content - Right Side */}
        <div style={{ textAlign: 'left' }}>
          {/* Add subtle background card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            borderRadius: '10px',
            padding: '3rem 2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #60a5fa, #c084fc)',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              Business Analytics Professional
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #60a5fa, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
            }}>
              Navya Nanduri
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6',
              maxWidth: '500px',
              marginBottom: '2rem',
            }}>
              Transforming Data into Strategic Business Solutions with cutting-edge analytics and machine learning
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;