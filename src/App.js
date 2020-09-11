import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from "./components/SignupComponent";

/**
 * Function for routing to the Sign Up page using React Router DOM.
 */

function App() {
  return (<Router>
    <div className="app">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Route path="/" component={SignUp} />
        </div>
        <footer>
          <p className='footer-label'>Copyright © 2020 Wellnexus Technologies Pvt. Ltd</p>
        </footer>
      </div>
    </div></Router>
  );
}



export default App;
