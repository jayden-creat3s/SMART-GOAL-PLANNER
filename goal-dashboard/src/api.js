// api.js
const API_URL = 'http://localhost:3001/goals';

// Fetch all goals
export const fetchGoals = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch goals');
  return res.json();
};

// Add a new goal
export const addGoal = async (goal) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(goal),
  });
  if (!res.ok) throw new Error('Failed to add goal');
  return res.json();
};

// Update goal
export const updateGoal = async (id, updates) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error('Failed to update goal');
  return res.json();
};

// Delete goal
export const deleteGoal = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete goal');
};
