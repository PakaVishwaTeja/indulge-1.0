import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
function App() {
  return (
    <Router>
    <div className="App">
    
     <Routes>
     <Route path='/' element={<LoginPage/>} />
     <Route path='/home' element={<Home/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
