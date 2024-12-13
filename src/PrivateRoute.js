// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Ensure this points to your firebase config
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ element }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    // Show a loading spinner while waiting for auth state
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Authentication error:", error); // Log any authentication error for debugging
    return <Navigate to="/login" />;
  }

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
