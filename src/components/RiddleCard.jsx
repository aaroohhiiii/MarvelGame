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
            <div className="placeholder-image">
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