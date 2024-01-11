// Api key - 553ed82e024e4a7c9055c838869bd008

import React, { useState } from "react";
import MealList from "./MealList";
//import Login from "./Login";
import { useUser } from './userContext';
import mealplan from "./images/meal-plan.png"


function MealApp() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const { username } = useUser();

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=553ed82e024e4a7c9055c838869bd008&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
    <div className="co-app">
    <section className="header">
        <h1>Happy Eating Awaits you, {username}!!😊</h1>
      </section>
      <img className="gif" src={mealplan}  alt="anime-gif"/>
      <section className="controls">
        <input
          type="number"
          placeholder=" Input Calories:"
          onChange={handleChange}
        />
        <button className='crud-btn' onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
    </div>
      
      {mealData && <MealList mealData={mealData} />}
    </div>
    
  );
}

export default MealApp;
