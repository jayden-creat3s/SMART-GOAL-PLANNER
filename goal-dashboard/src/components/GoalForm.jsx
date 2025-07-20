import React, { useState } from 'react';

const GoalForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      title,
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
    };

    console.log('Submitting goal:', newGoal);
    onSubmit(newGoal);

    setTitle('');
    setTargetAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      <input
        type="text"
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
