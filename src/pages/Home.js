import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Home ()  {
  const [tasks,setTasks]=useState([]);
  //load tasks from local storage
  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  },[]
  )
  //save tasks to  local storage
useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks]
)
const addTask =(taskText)=>{
  const newTask= {
    id:Date.now(),text:taskText,completed:false
  }
  setTasks([...tasks,newTask])
}
const toggleTaskCompletion =(taskId)=>{
  setTasks(tasks.map(task=>
    task.id===taskId ? {...task,completed: !task.completed}:task
  ))
  
};
const deleteTask =(taskId)=>{
  if (window.confirm ("are you sure?")){
    setTasks(tasks.filter (task=>task.id !==taskId))
  }
}

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask}/>
    </div>
  )
}

export default Home
