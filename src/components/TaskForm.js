import React, { useState } from 'react'

function TaskForm({addTask}){
    const [taskText,setTaskText]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (taskText.trim()){
            addTask(taskText);
            setTaskText("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='task-form'>
            <input 
            type='text'
            value={taskText}
            onChange={(e)=>setTaskText(e.target.value)}
            placeholder='Enter a task'
            />
            <button type='submit'>Add Task</button>
           </form>
      
    </div>
  )
}

export default TaskForm
