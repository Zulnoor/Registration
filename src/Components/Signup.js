// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    localStorage.setItem(email, JSON.stringify(user));
    setIsLoggedIn(true);
    setSignupSuccess(true); // Set signup success state to true
    setTimeout(() => {
      navigate('/login'); // Redirect to login page after a delay
    }, 2000); // Redirect after 2 seconds
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group password-group">
          <label>Password:</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="button" onClick={toggleShowPassword} className="show-password-button">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {signupSuccess && <p className="signup-success-message">Signed up successfully!</p>}
    </div>
  );
};

export default SignUp;
