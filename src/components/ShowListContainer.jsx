import React, {useEffect,useContext} from 'react';
import TaskCard from "./TaskCard"
import { globalList } from './Store';

export default function ShowListContainer(props) {
  const mystyl={
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  }
  const[ListOfTaskCard,seTListOfTaskCard]=useContext(globalList)

  const handleDeletionOfItem=(id)=>{
    console.log(id)
    
    const updateList = ListOfTaskCard.filter((item) => item.id !== id)
    console.log(updateList)
    console.log(ListOfTaskCard)
    seTListOfTaskCard(updateList)
    console.log(ListOfTaskCard)
  }

  
  useEffect(()=>{console.log("showlist rerender",ListOfTaskCard)},[ListOfTaskCard])
    return(
      <div style={mystyl}>
       {ListOfTaskCard.map((task,i)=>
       <TaskCard key={i} id={i} handleDeletionOfItem={handleDeletionOfItem} title={task.title} desc={task.desc} date={task.date}></TaskCard>)}

      </div>
    )

  
}
