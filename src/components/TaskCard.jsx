import React from 'react'
import "./css/TaskCard.css"
import { FaBeer } from 'react-icons/fa';

export default function TaskCard({title,desc,date,id, handleDeletionOfItem}) {

  
  return (
    <div className='task-card'>
      <div className='title-border'>
        <h3>{title}</h3><FaBeer className='fabeer' onClick={()=>handleDeletionOfItem(id)}></FaBeer>
      </div>
      <p>{desc}</p>
      <div className='date'>
        <span>{date}</span>
      </div>
    </div>
  )
}
