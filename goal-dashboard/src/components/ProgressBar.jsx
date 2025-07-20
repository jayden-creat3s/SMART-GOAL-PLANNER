import React from 'react';

const ProgressBar = ({ percent }) => (
  <div className="Progress">
    <div
      className="bg-green-500 h-4 rounded-full"
      style={{ width: `${percent}%` }}
    ></div>
  </div>
);

export default ProgressBar;

