import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import { useUser } from './userContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { SetUsername } = useUser();

  // Use the useNavigate hook to access navigation
  const navigate = useNavigate();

  const handleLogin = async () => {
    if(username === "" || password === ""){
      alert("Please enter all the details!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      const token = response.data.token;

      if(token){
        // Store the token securely (e.g., in a cookie or local storage) for future API requests.
      localStorage.setItem('token', token);
      SetUsername(username);
      // Redirect the user to the authenticated part of your app (e.g., the meal planner)
      navigate('/meal-app'); // Use navigate instead of history.push
      }

      
    } catch (error) {
      // Handle login error
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='signin-card'>
      <h2 className='nav-text'>Login</h2>
      <section  className='input'>
      <input type="text" placeholder="👨‍💻: Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="🔑: Password" onChange={(e) => setPassword(e.target.value)} />
      </section>
      <button className='crud-btn' onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
