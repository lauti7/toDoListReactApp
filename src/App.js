import React from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <ToDoContainer />
      </header>
    </div>
  );
}

export default App;
