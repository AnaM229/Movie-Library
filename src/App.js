import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <p>Select your type!</p>
        <Routes>
        <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
