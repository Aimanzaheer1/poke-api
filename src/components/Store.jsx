import React , {useState} from "react";

const initialState=[]

export const globalList= React.createContext()

const Store=({children})=>{
    const [fossa,setFossa]=useState(initialState)
    return (
        <globalList.Provider value={[fossa,setFossa]}>{children}</globalList.Provider>
    )
}


export default Store;