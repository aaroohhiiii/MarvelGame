import './CompletionModal.css'
import { riddles } from '../data/riddles'

const CompletionModal = ({ onRestart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="completion-animation">
          <div className="tva-symbol">⧖</div>
          <h1 className="completion-title">TIMELINE STATUS: RESTORED</h1>
          <p className="completion-message">
            Agent, the multiverse stabilizes once more.
            <br />
            The Sacred Timeline flows as intended.
          </p>
          
          {/* Heroes Gallery - Timeline Restored */}
          <div className="heroes-gallery">
            <h2 className="gallery-title">HEROES RESTORED TO THE TIMELINE</h2>
            <div className="heroes-grid">
              {riddles.map((riddle) => (
                <div key={riddle.id} className="hero-card">
                  <img 
                    src={riddle.image} 
                    alt={riddle.answer}
                    className="hero-image"
                  />
                  <div className="hero-info">
                    <span className="hero-name">{riddle.answer}</span>
                    <span className="hero-year">{riddle.year > 0 ? riddle.year : `${Math.abs(riddle.year)} BCE`}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="temporal-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
        <button onClick={onRestart} className="restart-btn">
          RESTART MISSION
        </button>
      </div>
    </div>
  )
}

export default CompletionModal