import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
import Admin from "./components/Admin";
import AdminDashboard from './components/AdminDashboard';
import INF from './components/INF';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
     <Route path='/' element={<LoginPage/>} />
     <Route path='/home' element={<Home/>} />
     <Route path='/admin' element={<Admin/>} />
     <Route path='/adminDashboard' element={<AdminDashboard />} />
     <Route path='/infs' element={<INF name="INFs"/>} />
     <Route path='/jnfs' element={<INF name="JNFs"/>} />
     <Route path='/infs' element={<INF name="JNFs"/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
