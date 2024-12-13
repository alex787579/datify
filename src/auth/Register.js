// Import necessary libraries and hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [gender, setGender] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    // Combine day, month, year to form the full date of birth
    const dob = `${dobYear}-${dobMonth}-${dobDay}`;

    // Simple validation
    if (!name || !email || !password || !dobDay || !dobMonth || !dobYear || !gender || !interestedIn) {
      setErrorMessage('All fields are required.');
      return;
    }

    console.log('User registered successfully:', {
      name,
      email,
      dob,
      gender,
      interestedIn,
    });

    // Redirect to another page after successful form submission
    navigate('/login');
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="card p-4 shadow-lg login-card">
        <h4 className="text-center mb-4 button-text-color">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label button-text-color">Name</label>
            <input
              type="text"
              className="form-control form-border-color"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label button-text-color">Email address</label>
            <input
              type="email"
              className="form-control form-border-color"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label button-text-color">Password</label>
            <input
              type="password"
              className="form-control form-border-color"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Date of Birth Section */}
          <div className="mb-3">
            <label className="form-label button-text-color">Date of Birth:</label>
            <div className="row">
              <div className="col-4">
                <select
                  className="form-select"
                  name="birthDateDay"
                  value={dobDay}
                  onChange={(e) => setDobDay(e.target.value)}
                  required
                >
                  <option disabled value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select
                  className="form-select"
                  name="birthDateMonth"
                  value={dobMonth}
                  onChange={(e) => setDobMonth(e.target.value)}
                  required
                >
                  <option disabled value="">Month</option>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>{month}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select
                  className="form-select"
                  name="birthDateYear"
                  value={dobYear}
                  onChange={(e) => setDobYear(e.target.value)}
                  required
                >
                  <option disabled value="">Year</option>
                  {[...Array(100)].map((_, i) => (
                    <option key={i} value={2024 - i}>{2024 - i}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="mb-3">
            <label htmlFor="gender" className="form-label button-text-color">Gender</label>
            <select
              className="form-control form-border-color"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Interested In Section */}
          <div className="mb-3">
            <label htmlFor="interestedIn" className="form-label button-text-color">Interested in</label>
            <select
              className="form-control form-border-color"
              id="interestedIn"
              value={interestedIn}
              onChange={(e) => setInterestedIn(e.target.value)}
              required
            >
              <option value="">Select Option</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Men & Women">Men & Women</option>
            </select>
          </div>

          {/* Custom Error message display */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          
          <div className="d-flex justify-content-between mb-3">
            <button type="submit" className="btn button-bg-color w-100 mb-3">Sign Up</button>
          </div>

          <div className="text-center">
            <p>Already have an Account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
