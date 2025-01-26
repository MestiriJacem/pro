import React, { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import'../styles/Home.css'
function Home ()  {
  const [tasks,setTasks]=useState([
{id:1 ,text:'learn react basics',completed:false},
{id:2,text:'understand jsx', completed:false},
{id:3 ,text:'build components',completed:false}
  ]);
  // function to add task
  const addTask =(taskText)=>{
    if(!taskText.trim()){
      toast.error("Task cannot be empty",{position :"top-right"})
    
    return;
  }
  const newTask= {id:tasks.length +1,text:taskText,completed:false};
  setTasks([...tasks,newTask])
  //show succes notifications
  toast.success("task added successfully",{position:"top-right"})
}
  //function to delete a task 
  const deleteTask =(id)=>{
setTasks(tasks.filter(task=>task.id !==id));
//show succes notification 
toast.info("task deleted!",{position:'top-right'})
  }
  //function to toggle task completion 
  const toggleTask=(id)=>{
    setTasks(tasks.map(task=>
      task.id===id?{...task,completed:!task.completed}:task
    )) 
  toast.success("Task updated!",{position:"top-right"}) }
  


  



  return (
    <div className='home-container'>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default Home
