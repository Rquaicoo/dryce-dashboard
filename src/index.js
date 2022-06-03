import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BusinessRegistration from './components/Business-Details/BusinessRegistration';
import SignInSide from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import History from './components/History/History';
import Odetails from './components/OrderDetails/Odetails';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

ReactDOM.render(
  <Router className= "container">
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignInSide />}/>
        <Route path="/business-registration" element={<BusinessRegistration />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/orderdetails" element={<Odetails />}/>
        {/* <Route path="*" element={<Header />}/> */}
      </Routes>
    </Router>,
    
    
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
