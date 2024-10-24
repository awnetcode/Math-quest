import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';
import ScoreCounter from './components/ScoreCounter';


function App() {
  const [active, setActive] = useState('not Found');
  const [score, setScore] = useState(0)
  return (
    <>
    <div id="container">
    <ScoreCounter scoreProp={score} />
    <Navigation setActiveProp={setActive}/>
    <Content activeProp={active} setScoreProp={setScore} scoreProp={score}/>
    </div>
    </>
  )
}

export default App
