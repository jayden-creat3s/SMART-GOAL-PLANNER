import React from 'react';

const OverviewPanel = ({ goals }) => {
  const totalGoals = goals.length;

  const totalTarget = goals.reduce((sum, g) => sum + Number(g.targetAmount || 0), 0);
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount || 0), 0);

  const progress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0;

  return (
    <div className="overview-panel">
      <h2>Overview</h2>
      <p>Total Goals: <strong>{totalGoals}</strong></p>
      <p>Total Target: <strong>${totalTarget.toLocaleString()}</strong></p>
      <p>Total Saved: <strong>${totalSaved.toLocaleString()}</strong></p>
      <p>Overall Progress: <strong>{progress.toFixed(2)}%</strong></p>
    </div>
  );
};

export default OverviewPanel;
