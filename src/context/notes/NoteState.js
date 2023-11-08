import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "654a37d889265165db060e9f",
      user: "654a016ef9d8f4e62413ff51",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-07T13:12:56.594Z",
      __v: 0,
    },
    {
      _id: "654a38b7e7c896579085c6a7",
      user: "654a016ef9d8f4e62413ff51",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-11-07T13:16:39.415Z",
      __v: 0,
    },
    {
      _id: "654a39ace7c896579085c6aa",
      user: "654a016ef9d8f4e62413ff51",
      title: "New Note",
      description: "Hurray! notes added",
      tag: "personal",
      date: "2023-11-07T13:20:44.478Z",
      __v: 0,
    },
    {
      _id: "654a4b46c616955fbcea639f",
      user: "654a016ef9d8f4e62413ff51",
      title: "New Note Updated",
      description: "Hurray! notes Updated2",
      tag: "personal",
      date: "2023-11-07T14:35:50.716Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
