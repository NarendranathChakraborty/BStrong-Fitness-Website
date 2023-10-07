import React, { useState } from 'react';
import './Userinput.css';


const Userinput = () => {
  // Initialize state variables for height, weight, gender, and goal
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the user's inputs in the 'height', 'weight', 'gender', and 'goal' variables
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Gender:', gender);
    console.log('Goal:', goal);
    // You can perform further processing or API calls with the user's input data here
  };

  return (
    <div>
      <h2>Get Pesonalised Exercise Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
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
        <div className="mb-3">
          <label htmlFor="goal">Fitness Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Userinput;
