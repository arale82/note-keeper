import React from "react";

function Note(props) {

  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {props.deleteButton(props.id);}}>Del</button>
    </div>
  );
}

export default Note;
