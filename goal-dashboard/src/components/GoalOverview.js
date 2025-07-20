import React from 'react';

const OverviewPanel = ({ goals }) => {
  const totalGoals = goals.length;
  const totalTarget = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const progress = totalTarget ? (totalSaved / totalTarget) * 100 : 0;

  return (
    <div className="overview-panel">
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Target: ${totalTarget.toLocaleString()}</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
      <p>Overall Progress: {progress.toFixed(2)}%</p>
    </div>
  );
};

export default OverviewPanel;
