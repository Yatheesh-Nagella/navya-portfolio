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
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
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
          fontSize: '1.5rem',
          color: '#60a5fa',
          fontWeight: '600',
          marginBottom: '1rem',
        }}>
          Business Analytics Professional
        </h2>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '3rem',
          lineHeight: '1.6',
        }}>
          Transforming Data into Strategic Business Solutions with cutting-edge analytics and machine learning
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'linear-gradient(to right, #2563eb, #7c3aed)',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
          }}>
            View My Work
          </button>
          <button style={{
            background: 'transparent',
            color: 'white',
            padding: '13px 28px',
            borderRadius: '50px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = '#fbbf24';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(245, 158, 11, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;