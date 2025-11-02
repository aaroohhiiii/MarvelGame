import './CompletionModal.css'

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