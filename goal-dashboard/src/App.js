import React, { useEffect, useState } from 'react';
import { fetchGoals, addGoal, updateGoal, deleteGoal } from './api';
import GoalCard from './components/GoalCard';
import GoalForm from './components/GoalForm';
import DepositForm from './components/DepositForm';
import OverviewPanel from './components/OverviewPanel';
import './style.css';


const App = () => {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const handleAddGoal = (goal) => {
    addGoal(goal).then(() => fetchGoals().then(setGoals));
  };

  const handleUpdateGoal = (id, updates) => {
    updateGoal(id, updates).then(() => fetchGoals().then(setGoals));
  };

  const handleDeleteGoal = (id) => {
    deleteGoal(id).then(() => fetchGoals().then(setGoals));
  };

  const handleDeposit = (id, amount) => {
    const goal = goals.find((g) => g.id === id);
    if (!goal) return;
    const newAmount = goal.savedAmount + amount;
    handleUpdateGoal(id, { savedAmount: newAmount });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">💰 Financial Goals Dashboard</h1>

      <OverviewPanel goals={goals} />

  
      <GoalForm onSubmit={handleAddGoal} />

      <DepositForm goals={goals} onDeposit={handleDeposit} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
