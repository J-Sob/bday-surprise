import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Puzzle from './components/Puzzle.js'
import Home from './components/Home.js'

function App() {
  return (
    <Router>
      <div className="App"
      style={{
        backgroundImage: 'url(/background.jpg)'
      }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/puzzle" element={<Puzzle/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
