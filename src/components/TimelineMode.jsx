import { useState } from 'react'
import { correctOrder } from '../data/riddles'
import './TimelineMode.css'

const TimelineMode = ({ riddles, timelineOrder, setTimelineOrder, onValidation }) => {
  const [draggedItem, setDraggedItem] = useState(null)
  const [validationMessage, setValidationMessage] = useState('')

  const handleDragStart = (e, riddleId) => {
    setDraggedItem(riddleId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, targetIndex) => {
    e.preventDefault()
    
    const draggedIndex = timelineOrder.indexOf(draggedItem)
    const newOrder = [...timelineOrder]
    
    // Remove from old position
    newOrder.splice(draggedIndex, 1)
    // Insert at new position
    newOrder.splice(targetIndex, 0, draggedItem)
    
    setTimelineOrder(newOrder)
    setDraggedItem(null)
  }

  const validateTimeline = () => {
    const isCorrect = JSON.stringify(timelineOrder) === JSON.stringify(correctOrder)
    
    if (isCorrect) {
      setValidationMessage('TIMELINE RESTORED!')
      setTimeout(() => {
        onValidation(true)
      }, 1000)
    } else {
      setValidationMessage('TEMPORAL INSTABILITY DETECTED')
      setTimeout(() => {
        setValidationMessage('')
      }, 2000)
    }
  }

  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <h2>ARRANGE THE SACRED TIMELINE</h2>
        <p>Drag the fragments into chronological order</p>
      </div>

      <div className="timeline-track">
        {timelineOrder.map((riddleId, index) => {
          const riddle = riddles.find(r => r.id === riddleId)
          return (
            <div
              key={riddleId}
              className="timeline-card"
              draggable
              onDragStart={(e) => handleDragStart(e, riddleId)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <div className="timeline-card-content">
                <div className="timeline-image">
                  {riddle.answer}
                </div>
                <div className="timeline-info">
                  <span className="timeline-period">{riddle.timelinePeriod}</span>
                  <span className="timeline-title">{riddle.answer}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="timeline-controls">
        <button onClick={validateTimeline} className="validate-btn">
          VALIDATE TIMELINE
        </button>
        {validationMessage && (
          <div className={`validation-message ${validationMessage.includes('RESTORED') ? 'success' : 'error'}`}>
            {validationMessage}
          </div>
        )}
      </div>
    </section>
  )
}

export default TimelineMode