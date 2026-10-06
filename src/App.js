import React, { useState } from 'react';

function App() {
  const [paginaActual, setPaginaActual] = useState(1);

  const handleSiguiente = () => setPaginaActual((prev) => prev + 1);
  const handleVolver = () => setPaginaActual((prev) => prev - 1);

  return (
    <div style={styles.mainContainer}>
      {/* Decoración de fondo */}
      <div style={styles.backgroundDecorations}>
        <span style={{ ...styles.balloon, top: '15%', left: '8%', transform: 'rotate(-15deg)' }}>🎈</span>
        <span style={{ ...styles.balloon, top: '55%', left: '12%', transform: 'rotate(-5deg)' }}>🎈</span>
        <span style={{ ...styles.balloon, top: '12%', right: '10%', transform: 'rotate(15deg)' }}>🎈</span>
        <span style={{ ...styles.balloon, top: '60%', right: '8%', transform: 'rotate(10deg)' }}>🎈</span>
        <span style={{ ...styles.confetti, top: '10%', left: '28%' }}>⭐</span>
        <span style={{ ...styles.confetti, top: '82%', right: '22%' }}>✨</span>
        <span style={{ ...styles.confetti, top: '78%', left: '18%' }}>🎉</span>
        <span style={{ ...styles.confetti, top: '25%', right: '28%' }}>🎊</span>
      </div>

      {/* Tarjeta Tipo Carta */}
      <div style={styles.cardContainer}>
        {paginaActual === 1 && (
          <div style={styles.cardContent}>
            <h2 style={styles.titleHeader}>🎈 ¡ESTÁS INVITADO A...! 🎈</h2>
            <div style={styles.birthdayBanner}>
              <h3 style={{ color: '#2b6cb0', fontSize: '1.4rem' }}>Una celebración especial</h3>
            </div>
            <p style={styles.subText}>Haz clic en el botón para ver de qué se trata...</p>
            <button style={styles.btnNext} onClick={handleSiguiente}>
              Siguiente &rarr;
            </button>
          </div>
        )}

        {paginaActual === 2 && (
          <div style={styles.cardContent}>
            <h2 style={styles.surpriseHeader}>⚠️ MENSAJE IMPORTANTE ⚠️</h2>
            <div style={styles.surpriseBox}>
              <h1 style={styles.surpriseText}>...Chingar a tu ptm!</h1>
            </div>
            <p style={styles.subText}>Bueno, ya en serio, ¡mira los datos de la fiesta!</p>
            <button style={styles.btnNext} onClick={handleSiguiente}>
              Ver Detalles de la Fiesta &rarr;
            </button>
          </div>
        )}

        {paginaActual === 3 && (
          <div style={styles.cardContent}>
            <h2 style={styles.titleHeader}>✨ DETALLES DE LA FIESTA ✨</h2>
            <div style={styles.infoSection}>
              <p><strong>📅 ¿CUÁNDO?</strong> Sábado, 31 de Octubre de 2026</p>
              <p><strong>📍 ¿DÓNDE?</strong> Mi casa, Tala, Jalisco, México</p>
              <p><strong>⏰ Horario:</strong> 7:00 PM - 10:00 PM</p>
              <p><strong>🎁 Regalo:</strong> ¡Obligatorio!</p>
            </div>
            <div style={styles.rsvpBox}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Por favor confirma tu asistencia antes del 6 de Octubre.</p>
              <button
                style={styles.btnConfirm}
                onClick={() => alert('¡Avisame por whats!')}
              >
                ¡Sí asistiré! 🥳
              </button>
            </div>
            <button style={styles.btnBack} onClick={handleVolver}>
              &larr; Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    minHeight: '100vh',
    backgroundColor: '#fce8c9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: 'border-box',
  },
  backgroundDecorations: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  balloon: {
    position: 'absolute',
    fontSize: '4rem',
    opacity: 0.8,
  },
  confetti: {
    position: 'absolute',
    fontSize: '1.8rem',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    border: '4px solid #1a365d',
    borderRadius: '20px',
    padding: '35px 25px',
    maxWidth: '440px',
    width: '100%',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleHeader: {
    color: '#0d1b2a',
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  surpriseHeader: {
    color: '#c53030',
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  birthdayBanner: {
    margin: '15px 0',
  },
  surpriseBox: {
    backgroundColor: '#fff5f5',
    border: '2px dashed #feb2b2',
    borderRadius: '12px',
    padding: '20px',
    margin: '15px 0',
    width: '100%',
    boxSizing: 'border-box',
  },
  surpriseText: {
    color: '#e53e3e',
    fontSize: '1.6rem',
    fontWeight: '800',
    margin: 0,
  },
  infoSection: {
    backgroundColor: '#f7fafc',
    borderRadius: '10px',
    padding: '15px',
    width: '100%',
    margin: '15px 0',
    color: '#2d3748',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  subText: {
    color: '#4a5568',
    fontWeight: '600',
    marginBottom: '20px',
  },
  rsvpBox: {
    backgroundColor: '#edf2f7',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  btnNext: {
    backgroundColor: '#1a365d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
  btnConfirm: {
    backgroundColor: '#38a169',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
  },
  btnBack: {
    backgroundColor: 'transparent',
    color: '#4a5568',
    border: '1px solid #cbd5e0',
    borderRadius: '20px',
    padding: '8px 20px',
    cursor: 'pointer',
  },
};

export default App;