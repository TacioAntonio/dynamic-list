import React, { useState } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem'
const App = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask() {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: ''});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1,  {id: index, value: target.value});
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="App">
        <button className="Todo-add" onClick={addNewTask}>+</button>
        {tasks.map(({id, value}, index) => (

          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />

        ))}
    </div>
  )
}

export default App;
