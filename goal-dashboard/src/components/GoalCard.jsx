import React from 'react';

const GoalCard = ({ goal, onEdit, onDelete }) => {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;

  return (
    <div className="goal-card">
      <h3>{goal.title}</h3>
      <p>Target: ${goal.targetAmount.toLocaleString()}</p>
      <p>Saved: ${goal.savedAmount.toLocaleString()}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress.toFixed(1)}% Complete</p>
      <div className="goal-actions">
        <button onClick={() => onEdit(goal)}>Edit</button>
        <button onClick={() => onDelete(goal.id)}>Delete</button>
      </div>
    </div>
  );
};

export default GoalCard;
