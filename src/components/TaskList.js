import React from 'react'
import TaskItem from './TaskItem'
import '../styles/TaskList.css'

function TaskList ({tasks,toggleTask,deleteTask})  {
  return (
    <ul className='task-list'>
      {tasks.map((task)=>(
        <TaskItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        />
      ))}

    </ul>
  )
}

export default TaskList
