import React, { useState, useEffect } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (goals.length > 0 && !goals.find(g => g.id === selectedGoalId)) {
      setSelectedGoalId('');
    }
  }, [goals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedGoalId || !amount) return;

    onDeposit(selectedGoalId, parseFloat(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <h2>Deposit to Goal</h2>

      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
        required
      >
        <option value="">Select a goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
