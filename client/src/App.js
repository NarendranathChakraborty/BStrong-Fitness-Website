import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Routes, Route, and Link components
import Homepage from './Homepage/homepage';
import Login from './Login'; // Import your Login component
import Signup from './Signup'; // Import your Signup component

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        
       
        
       
      </Routes>
    </div>
  );
}

export default App;


