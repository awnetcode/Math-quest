import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';


function App() {
  const [active, setActive] = useState('not Found');
  return (
    <>
    <div id="container">
    <Navigation setActiveProp={setActive}/>
    <Content activeProp={active}/>
    </div>
    </>
  )
}

export default App
