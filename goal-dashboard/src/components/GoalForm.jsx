import React, { useState } from 'react';

const GoalForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedCategory = category.trim();

    const newGoal = {
      name: trimmedName || 'Unnamed Goal',
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
      category: trimmedCategory || 'Uncategorized',
      deadline: deadline || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0],
    };

    onSubmit(newGoal);

    // Clear fields
    setName('');
    setTargetAmount('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Add New Goal</h2>
      <input
        type="text"
        placeholder="Goal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount (Ksh)"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
        min="1"
      />
      <input
        type="text"
        placeholder="Category (e.g., Travel, Emergency)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
