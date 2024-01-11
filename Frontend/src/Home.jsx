// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import mealicon from './images/meal-app.png'
const Home = () => {
  return (
    <div className='nav-card'>
        <section  className='nav-text'>
        <h2>Welcome to MealApp</h2>
        <p>Create your meal plan right here in seconds.</p>
        </section>

        <section className='nav-image'>
          <img src={mealicon} alt='meal-img'/>
        </section>
        
        <nav>
          <ul>
            <li className='signup-btn'>
              <Link to="/signup">Sign up</Link>
            </li>
            <li className='login-btn'>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>

  );
};

export default Home;
