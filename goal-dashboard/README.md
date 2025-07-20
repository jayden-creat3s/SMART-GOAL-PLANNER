 Financial Goals Dashboard

A modern, comic-inspired React application that allows users to manage, track, and visualize their financial goals efficiently.

---

## Features

- Add, edit, and delete financial goals
- View overall progress in a clear overview panel
- Interactive and responsive layout
- Comic-styled UI with a modern design aesthetic
- JSON-server integration for persistent local data

---

## Project Structure

src/
├── components/
│ ├── GoalForm.jsx
│ ├── GoalList.jsx
│ ├── GoalOverview.jsx
├── App.jsx
├── index.js
├── styles/
│ └── style.css
db.json
README.md

yaml
Copy
Edit

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- `json-server` installed globally or using `npx`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/financial-goals-dashboard.git
cd financial-goals-dashboard
npm install
Running the App
Start the React development server:

bash
Copy
Edit
npm start
The app will run at:
http://localhost:3000

Start the JSON server for the API:

bash
Copy
Edit
npx json-server --watch db.json --port 3001
The API endpoint will be:
http://localhost:3001/goals

Technologies Used
React.js

JSON Server

CSS Grid and Flexbox

Google Fonts (Rubik Mono One, Poppins)

Design Notes
Inspired by comic book layouts (Marvel/DC) with a minimalist UI twist

Uses bold color contrasts and responsive card designs

Font choices were modernized for cleaner legibility

Potential Improvements
Add user authentication

Enable goal categories or labels

Add progress notifications or alerts

Support dark/light theme toggle

License
This project is licensed under the MIT License.

Developed by Jayden Kamau