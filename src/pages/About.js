import React from 'react'
import '../styles/About.css'
const About = () => {
  return (
    <div className='about-container'>
      <h1>
        about this app
      </h1>
      <p>
        welcome to our task manager this application is designed to help you oraginze
        cjabcjbajvbkjabkvbakjbvkabzjcbajk
      </p>
      <h2>
        features
      </h2>
      <ul>
        <li>Add,edit,and delete tasks</li>
        <li>Mark tasks as completed or unfinished</li>
        <li>Filter tasks (all,completed,unfinished)</li>
        <li>Dark mode for better night-time visibility</li>
        <li>User authentificatio (login/signup)</li>
        <li>Responsive and easy to use interface</li>
        
      </ul>
      <h2> why use this app</h2>
      <p>
        whether you are a student or professional this app will help you track your daily activities 
      </p>
      <h2> Contact</h2>
      <p> hae feedback or need support reach out at {""}
        <a href='mailto:support@taskmanager.com'> support@taskmanager.com</a>
      </p>
    </div>
  )
}

export default About
