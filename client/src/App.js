import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import Navbar from './Navbar/navbar';
import homepage from './homepage';
import Signup from './Signup'; // Import the Signup component

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<homepage />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
