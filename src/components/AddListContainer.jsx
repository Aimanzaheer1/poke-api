import React, {useState,useContext,useEffect} from 'react'
import "./css/AddListContainer.css"
import ShowListContainer from './ShowListContainer';
import TaskCard from './TaskCard';
import {globalList}from './Store';

export default function AddListContainer() {
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    const [date,setDate]= useState("");
    const[ListOfTaskCard,seTListOfTaskCard]=useContext(globalList)
    let id=-1;
    
    
    const funcSetTitle=(e)=>{
      setTitle(e.target.value)
      console.log(title)
    }
    const funcSetDesc=(e)=>{
      setDesc(e.target.value)
    }
    const funcSetDate=(e)=>{
      setDate(e.target.value)
    }
    
       /*------------------Clear Button functionality--------------------*/
    const clear=()=>{
      setTitle("")
      setDesc("")
      setDate("")
    }

    /*------------------Add Button functionality----taking care of list of to-do (taskCards)--------------------*/
    

    const AddCard=()=>{
        
        if(title.length>0 && desc.length>0){

          seTListOfTaskCard(  
            (preList)=>[...preList,{"title":title,"desc":desc,"date":date,id:id+1}]
          )
          clear()
        }
    }
    
    return (
      
      <>
        <div className='wrapper'>
          
            <form onSubmit={(event)=>event.preventDefault}>
              <div className='input-fields'>
                <input type="text" placeholder="Title" required="required" onChange={funcSetTitle} value={title}/>
                <input type="text" placeholder="Task Details" required="required"  onChange={funcSetDesc} value={desc}/>
                <input type="date" min={new Date().toLocaleDateString()} onChange={funcSetDate} value={date}/>
              </div>
              <div className='addlist-container-buttons'>
                  <button type="button"className='add-clear' onClick={clear}>Clear</button>
                  <button type="onSubmit" className='add-clear' onClick={AddCard}>Add</button>
                    
                </div>
            </form>
           </div>
      </>
    )
}

