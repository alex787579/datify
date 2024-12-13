import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      // Placeholder for backend authentication API call
      const response = await fakeAuthService.login(email, password);
      
      if (response.success) {
        // Placeholder for updating user status (e.g., calling a backend API)
        console.log('User logged in:', response.user);
        navigate('/matches'); // Redirect after successful login
      } else {
        setError(response.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Placeholder for Google sign-in logic
      const response = await fakeAuthService.googleSignIn();

      if (response.success) {
        console.log('User signed in with Google:', response.user);
        navigate('/'); // Redirect after successful login
      } else {
        setError(response.message || 'An error occurred during Google sign-in.');
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      setError('An error occurred during Google sign-in. Please try again later.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="card p-4 shadow-lg login-card">
        <h4 className="text-center mb-4 button-text-color">Login</h4>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn button-bg-color w-100 mb-3">Login</button>
          <button type="button" className="btn btn-danger w-100 mb-3" onClick={handleGoogleSignIn}>
            <i className="fab fa-google me-2"></i>Sign in with Google
          </button>
        </form>
        <div className="text-center">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

// Placeholder for authentication service
const fakeAuthService = {
  login: async (email, password) => {
    // Simulate an API call for user authentication
    if (email === 'test@gmail.com' && password === '123') {
      return { success: true, user: { id: 1, email } };
    } else {
      return { success: false, message: 'Invalid email or password.' };
    }
  },

  googleSignIn: async () => {
    // Simulate an API call for Google sign-in
    return { success: true, user: { id: 2, email: 'googleuser@example.com' } };
  },
};

export default Login;
