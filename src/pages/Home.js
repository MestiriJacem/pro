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
  const [filter,setFilter]= useState('all')
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
  //filter tasks
  const filteredTasks=tasks.filter(task=>{
    if (filter=== 'completed') return task.completed;
    if(filter ==='unfinished') return !task.completed;
  return true;
  })


  



  return (
    <div className='home-container'>
      <TaskForm addTask={addTask} />
      <div className='filter-buttons'>
        <button onClick={()=>setFilter("all")}>All</button>
        <button onClick={()=>setFilter("completed")}>completed</button>
        <button onClick={()=>setFilter("unfinished")}>unfinished</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default Home
