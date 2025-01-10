// SignUp.jsx

import React, { useState } from 'react';
import { signUpUser } from './authUtils'; // Import signUpUser function from authUtils
// import '../SignUp.css'; // Adjust the path as per your file structure

export default function SignUp({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await signUpUser(email, password); // Use signUpUser function from authUtils
      if (error) {
        setError(error);
        return;
      }
      if (user) {
        // Call onSuccess callback or redirect to next step
        onSuccess();
      }
    } catch (error) {
      console.error('Sign up error:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
