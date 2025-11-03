import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import GameGrid from './components/GameGrid'
import TimelineMode from './components/TimelineMode'
import CompletionModal from './components/CompletionModal'
import { riddles } from './data/riddles'
import FaultyTerminal from './components/FaultyTerminal'

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
      {/* FaultyTerminal Background */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', 
        minHeight: '100vh',
        height: '100%',
        zIndex: 0,
        opacity: 0.7,
        pointerEvents: 'none'
      }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#F68C1F"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>

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
          <span className="footer-text">Made By a dieHard for the dieHard</span>
          {/* <span className="footer-rights">All rights reserved Aarohi</span> */}
          <div className="tva-clock">⧖</div>
        </div>
      </footer>
    </div>
  )
}

export default App
