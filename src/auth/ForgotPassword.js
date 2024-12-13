// Login.js
// import React,  from 'react';
import React from 'react';

// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const ForgotPassword = () => {


 
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="card p-4 shadow-lg login-card">
          <h4 className="text-center mb-4 button-text-color">Forgot Password</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label button-text-color">Email address</label>
              <input type="email" className="form-control form-border-color" id="email" placeholder="Enter your email" />
            </div>

            <button type="submit" className="btn button-bg-color w-100 mb-3">Continue</button>
            <div className="text-center">
              <p>Already have an Account? <a href="#">Login</a></p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default ForgotPassword;
