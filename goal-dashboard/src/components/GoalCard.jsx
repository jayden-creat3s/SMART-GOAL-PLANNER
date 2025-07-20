import React from 'react';

const getDeadlineStatus = (deadline) => {
  const today = new Date();
  const end = new Date(deadline);
  const diffTime = end - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return { text: `Past due (${end.toDateString()})`, color: 'red' };
  if (diffDays === 0) return { text: 'Today', color: 'orange' };
  if (diffDays === 1) return { text: 'Tomorrow', color: 'orange' };
  if (diffDays < 7) return { text: `in ${diffDays} days`, color: 'orange' };
  if (diffDays < 30) return { text: `in ${diffDays} days`, color: 'goldenrod' };
  return { text: end.toDateString(), color: 'green' };
};

const GoalCard = ({ goal, onEdit, onDelete }) => {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const deadlineInfo = getDeadlineStatus(goal.deadline);

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Target: Ksh {goal.targetAmount.toLocaleString()}</p>
      <p>Saved: Ksh {goal.savedAmount.toLocaleString()}</p>
      <p style={{ color: deadlineInfo.color }}>
        Deadline: {deadlineInfo.text}
      </p>
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
