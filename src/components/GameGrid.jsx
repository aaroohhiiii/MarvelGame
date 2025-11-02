import { useState } from 'react'
import RiddleCard from './RiddleCard'
import './GameGrid.css'

const GameGrid = ({ riddles, solvedRiddles, onRiddleSolved }) => {
  return (
    <section className="game-section">
      <div className="game-grid">
        {riddles.map(riddle => (
          <RiddleCard
            key={riddle.id}
            riddle={riddle}
            isSolved={solvedRiddles[riddle.id]}
            onSolved={() => onRiddleSolved(riddle.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default GameGrid