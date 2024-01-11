import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Use the useNavigate hook to access navigation
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      console.log('Username:', username);
      console.log('Password:', password);

      await axios.post('http://localhost:3000/register', { username, password });

      // Handle successful registration (e.g., redirect to login)
      navigate('/login'); // Use navigate to redirect to the login page after registration
    } catch (error) {
      // Handle registration error
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='signin-card'>
      <h2 className='nav-text'>Signup</h2>
      <section className='input'>
      <input  type="text" placeholder="👨‍💻: Username" onChange={(e) => setUsername(e.target.value)} />
      <input  type="password" placeholder="🔑: Password" onChange={(e) => setPassword(e.target.value)} />
      </section>
      <button className='crud-btn' onClick={handleSignup}>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
