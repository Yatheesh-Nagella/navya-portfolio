'use client';

const Hero = () => {
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
        paddingTop: '80px',
      }}
    >
      <div style={{ 
        maxWidth: '1200px',
        width: '100%',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr', // Fixed layout: text left, image right
        gap: '3rem',
        alignItems: 'center',
      }}>
        
        {/* Text Content - Left Side */}
        <div style={{ textAlign: 'left' }}> {/* Changed to left align */}
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
          
          <h2 style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
            color: '#60a5fa',
            fontWeight: '600',
            marginBottom: '1.5rem',
          }}>
            Business Analytics Professional
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.6',
            maxWidth: '500px',
          }}>
            Transforming Data into Strategic Business Solutions with cutting-edge analytics and machine learning
          </p>
        </div>

        {/* Profile Image - Right Side */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'relative',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}>
            
            {/* Main Profile Image */}
            <div style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '8px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
            }}>
              <img
                src="/images/Head-shot.jpg"
                alt="Navya Nanduri - Business Analytics Professional"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              
              {/* Shimmer Effect Overlay */}
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

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fbbf24, #f97316)',
              boxShadow: '0 10px 30px rgba(245, 158, 11, 0.3)',
              animation: 'float 4s ease-in-out infinite',
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)',
              animation: 'float 4s ease-in-out infinite 2s',
            }} />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }

        @media (max-width: 1024px) {
          section > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          section > div {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;