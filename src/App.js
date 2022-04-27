import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
  useParams
} from "react-router-dom";

import './App.css';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Destination from './pages/Destination';
import Home from './pages/Home';

function App() {
      let { id } = useParams();  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />} />
      <Route path='/crew' element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
          
    </Routes>

  );
}

export default App;
