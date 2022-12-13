import React from 'react'
import "./App.css"
import AddListContainer from './components/AddListContainer'
import ShowListContainer from './components/ShowListContainer'
import Store from './components/Store'

export default function App() {
  return (
    <>
      <div className='container'>
        <div className='to-do-app'>
          
          <Store>
          <AddListContainer></AddListContainer> 
          <ShowListContainer></ShowListContainer>
          </Store>
        </div>
      </div>
    </>
  )
}
