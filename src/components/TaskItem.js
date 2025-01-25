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
      <span onClick={()=>toggleTask(task.id)}>
 {task.text}
      </span>
      <button onClick={()=>deleteTask(task.id)}>❌ </button>
    </li>
  )
}

export default TaskItem
