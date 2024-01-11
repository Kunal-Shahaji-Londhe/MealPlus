import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import MealApp from './Meal-App';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {<Route path="/meal-app" element={<MealApp />} />}
        {/*<Route path="/meal-app" element={<PrivateRoute element={<MealApp />} />} />*/}
        {/* Add more routes for your app as needed */}
      </Routes>
    </Router>
  );
};

export default App;
