import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Fab } from "@mui/material";

function Note(props) {

  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={() => {props.deleteButton(props.id);}}><DeleteIcon /></Fab>
    </div>
  );
}

export default Note;
