import './App.css';
import {useState} from 'react';

function App() {
  const [taskList, addTask] = useState([]);
  const [task, setTask] = useState("");
  const handleChange = (event)=>{
    setTask(event.target.value);
  }
  const handleTask = ()=>{
    addTask([...taskList, task]);
  }
  const deleteTask = (task)=>{
    const newList = taskList.filter((taskName)=> task !== taskName);
    addTask(newList);
  }

  return (
    <div className="App">
      <div className = "addlist">
        <input onChange={handleChange}/>
        <button onClick={handleTask}>add task</button>
      </div>
      <div className='list'>
        {taskList.map((task)=>{
          return <div><h1>{task}</h1>
          <button onClick = {()=>deleteTask(task)}>X</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
