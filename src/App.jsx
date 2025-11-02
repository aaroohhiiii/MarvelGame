import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import GameGrid from './components/GameGrid'
import TimelineMode from './components/TimelineMode'
import CompletionModal from './components/CompletionModal'
import { riddles } from './data/riddles'

function App() {
  const [solvedRiddles, setSolvedRiddles] = useState({})
  const [gameMode, setGameMode] = useState('riddles') // 'riddles' or 'timeline'
  const [timelineOrder, setTimelineOrder] = useState([])
  const [showCompletion, setShowCompletion] = useState(false)

  // Check if all riddles are solved
  useEffect(() => {
    const solvedCount = Object.keys(solvedRiddles).length
    if (solvedCount === riddles.length && gameMode === 'riddles') {
      setGameMode('timeline')
      setTimelineOrder(riddles.map(r => r.id))
    }
  }, [solvedRiddles, gameMode])

  const handleRiddleSolved = (riddleId) => {
    setSolvedRiddles(prev => ({
      ...prev,
      [riddleId]: true
    }))
  }

  const handleTimelineValidation = (isCorrect) => {
    if (isCorrect) {
      setShowCompletion(true)
    }
  }

  const resetGame = () => {
    setSolvedRiddles({})
    setGameMode('riddles')
    setTimelineOrder([])
    setShowCompletion(false)
  }

  return (
    <div className="app">
      <Header />
      
      {gameMode === 'riddles' && (
        <GameGrid 
          riddles={riddles}
          solvedRiddles={solvedRiddles}
          onRiddleSolved={handleRiddleSolved}
        />
      )}
      
      {gameMode === 'timeline' && (
        <TimelineMode 
          riddles={riddles}
          timelineOrder={timelineOrder}
          setTimelineOrder={setTimelineOrder}
          onValidation={handleTimelineValidation}
        />
      )}

      {showCompletion && (
        <CompletionModal onRestart={resetGame} />
      )}

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-text">Keynote Club × TVA Hack Team | IIIT Sri City 2025</span>
          <div className="tva-clock">⧖</div>
        </div>
      </footer>
    </div>
  )
}

export default App
