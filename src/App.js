import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Reschedule from './Pages/Reschedule';
import Cancel from './Pages/Cancel';
import Booking from './Pages/Booking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/booking" element={ <Booking/> } />
          <Route exact path="/cancel" element={ <Cancel/> } />
          <Route exact path="/reschedule" element={ <Reschedule/> } />
        </Routes>
      </div>
     
      
    </BrowserRouter>
  );
}

export default App;

