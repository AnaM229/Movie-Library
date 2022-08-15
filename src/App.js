import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Romance from './pages/Romance';
import Comedy from './pages/Comedy';
import Action from './pages/Action';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/romance' exact element={<Romance />} />
        <Route path='/comedy' exact element={<Comedy />} />
        <Route path='/action' exact element={<Action />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
