import React from 'react'
import blankTask from '../../assets/images/blank-task.png'
import './AssignTask.css'

export default function BlankTask() {
  return (
    <div className='blank_task'>
        <img src={blankTask} alt="" />
        <h1>No Data Found</h1>
        <p>Add Candidate</p>
    </div>
  )
}
