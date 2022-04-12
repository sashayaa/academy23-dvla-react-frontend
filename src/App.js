import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Reschedule from './Pages/Reschedule';
import Cancel from './Pages/Cancel';
import Booking from './Pages/Booking';
import PersonalDetailsForm from './Pages/PersonalDetailsForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewBooking from './Pages/ViewBooking';
import Confirmation from './Pages/Confirmation';
//const axios = require('axios').default;


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/booking" element={ <Booking/> } />
          <Route exact path="/cancel" element={ <Cancel/> } />
          <Route exact path="/reschedule" element={ <Reschedule/> } />
          <Route exact path="/viewbooking" element={ <ViewBooking/> } />    
          <Route exact path="/personaldetailsform" element={ <PersonalDetailsForm/> } />  
          <Route exact path="/confirmation" element={ <Confirmation/> } />     
        </Routes>
      </div>
     
      
    </BrowserRouter>
  );
}

export default App;

