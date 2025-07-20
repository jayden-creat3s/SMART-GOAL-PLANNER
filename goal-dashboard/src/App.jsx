import React, { useEffect, useState } from 'react';
import {
  fetchGoals,
  addGoal,
  updateGoal,
  deleteGoal
} from './api';

import GoalCard from './components/GoalCard';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import OverviewPanel from './components/OverviewPanel';
import './style.css';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  const loadGoals = async () => {
    try {
      const data = await fetchGoals();
      setGoals(data);
    } catch (error) {
      console.error('Failed to load goals:', error);
    }
  };

  useEffect(() => {
    loadGoals();
  }, []);

  const handleAddGoal = async (goal) => {
    try {
      const newGoal = await addGoal(goal);
      setGoals((prev) => [...prev, newGoal]);
    } catch (error) {
      console.error('Failed to add goal:', error);
    }
  };

  const handleUpdateGoal = async (id, updates) => {
    try {
      await updateGoal(id, updates);
      await loadGoals();
    } catch (error) {
      console.error('Failed to update goal:', error);
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      await deleteGoal(id);
      await loadGoals();
    } catch (error) {
      console.error('Failed to delete goal:', error);
    }
  };

  const handleDeposit = (id, amount) => {
    const goal = goals.find((g) => String(g.id) === String(id));
    if (!goal) return;

    const currentAmount = parseFloat(goal.savedAmount) || 0;
    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.warn('Invalid deposit amount');
      return;
    }

    const newAmount = currentAmount + depositAmount;
    handleUpdateGoal(goal.id, { savedAmount: newAmount });
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Financial Goals Plan</h1>

      <OverviewPanel goals={goals} />
      <GoalForm onSubmit={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />

      <div className="goal-grid">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={setEditingGoal}
            onDelete={handleDeleteGoal}
            onUpdate={handleUpdateGoal}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
