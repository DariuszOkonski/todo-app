import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskLIst from './TaskList';

function App() {
  return (
    <div className="App">
      ToDo - app
      <AddTask />
      <TaskLIst />
    </div>
  );
}

export default App;
