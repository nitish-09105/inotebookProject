import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState=(props)=>{
    const s1={
        "name": "ramesh",
        "class": "10d"
    }
    const[state,setState]=useState(s1);

    // update name and class after a given time interval automatically
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name": "suresh",
                "class": "12d"
            })
        },1000)
    }
    return(  
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState