'use client';

const Home = () => {
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
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '8px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
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
        </div>
      </div>
    </section>
  );
};

export default Home;