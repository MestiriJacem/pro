import React, { useState } from 'react'
import '../styles/TaskItem.css'

function  TaskItem  ({task,toggleTask,deleteTask,editTask}) {
  const [isEditing,setIsEditing]=useState(false);
  const [newText,setNewText]=useState(task.text);
  //handle edit submit
  const handleEdit=()=>{
    editTask(task.id,newText);
    setIsEditing(false)
  }
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing?(
        <>
        <input
        type='text'
        value={newText}
        onChange={ (e)=>setNewText(e.target.value)}
        className='edit-input'
        
        />
        </>)
        :( <>
        <span onClick={()=> toggleTask(task.id)}>{task.text} </span>
        <button onClick={()=> setIsEditing(true)} className='edit-btn'> edit</button>
        <button onClick={()=> deleteTask(task.id)} className='delete-btn'> delete</button>
        
        </>)
    }
    
export default TaskItem
