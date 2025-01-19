import React, { useEffect, useState } from 'react'

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
  const 
}

  return (
    <div>
      home
    </div>
  )
}

export default Home
