import './App.css';
import Home from './Components/Home';
import Resume from './Components/Resume';
import { BrowserRouter as Router, Route, Routes,  Navigate, NavLink, } from 'react-router-dom'
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="Home" element={<Home/>}/>
          <Route exact path="Resume" element={<Resume/>}/>
          <Route path="" element={<Navigate to="/Resume" />} />
        </Routes>
    </Router>
  );
}

export default App;
