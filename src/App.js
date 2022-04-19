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
import WelshHome from './Pages/WelshHome';
import WelshBooking from './Pages/WelshBooking';
import WelshPersonalDetails from './Pages/WelshPersonalDetails';
import CancelConfirmation from './Pages/CancelConfirmation';
import RescheduleConfirmation from './Pages/RescheduleConfirmation';
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
          <Route exact path="/CancelConfirmation" element={ <CancelConfirmation/> } /> 
          <Route exact path="/WelshHome" element={ <WelshHome/> } />   
          <Route exact path="/WelshBooking" element={ <WelshBooking/> } />
          <Route exact path="/WelshPersonalDetails" element={ <WelshPersonalDetails/> } />
          <Route exact path="/rescheduleconfirmation" element={ <RescheduleConfirmation/> } />     
        </Routes>
      </div>
     
      
    </BrowserRouter>
  );
}

export default App;

