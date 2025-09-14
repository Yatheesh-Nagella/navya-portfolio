'use client';

const About = () => {
  return (
    <section 
      id="about"
      style={{
        minHeight: '100vh',
        background: 'rgba(15, 23, 42, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '2rem',
        }}>
          About Me
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
        }}>
          Coming soon... About section with personal story and professional philosophy.
        </p>
      </div>
    </section>
  );
};

export default About;