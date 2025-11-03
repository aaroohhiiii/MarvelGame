import { useState } from 'react'
import './RiddleCard.css'

const RiddleCard = ({ riddle, isSolved, onSolved }) => {
  const [answer, setAnswer] = useState('')
  const [isRevealing, setIsRevealing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase().trim() === riddle.answer.toLowerCase()) {
      setIsRevealing(true)
      setTimeout(() => {
        onSolved()
      }, 300)
    } else {
      // Wrong answer feedback
      const card = e.target.closest('.riddle-card')
      card.classList.add('wrong-answer')
      setTimeout(() => {
        card.classList.remove('wrong-answer')
      }, 500)
    }
  }

  return (
    <div className={`riddle-card ${isSolved ? 'solved' : ''} ${isRevealing ? 'revealing' : ''}`}>
      {!isSolved ? (
        <div className="riddle-content">
          <p className="riddle-text">{riddle.clue}</p>
          <form onSubmit={handleSubmit} className="riddle-form">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer..."
              className="riddle-input"
              required
            />
            <button type="submit" className="decrypt-btn">
              DECRYPT
            </button>
          </form>
        </div>
      ) : (
        <div className="solved-content">
          <div className="image-container">
            <img 
              src={riddle.image} 
              alt={riddle.answer}
              className="riddle-image"
              onLoad={() => console.log('Image loaded successfully:', riddle.image)}
              onError={(e) => {
                console.log('Image failed to load:', riddle.image);
                console.log('Full URL attempted:', e.target.src);
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="placeholder-fallback" style={{ display: 'none' }}>
              {riddle.answer}
            </div>
          </div>
          <div className="stabilized-label">
            <span>STABILIZED ✓</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default RiddleCard