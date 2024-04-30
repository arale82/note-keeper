import React, {useState} from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({});

  function handleChange(event){
    const { name, value } = event.target;

    setNewNote(prevValue => {
      return({
        ...prevValue,
        [name] : value
      });
    });
  }

  return (
    <div>
      <form onSubmit={(event) => {
        props.onSubmit(newNote);
        setNewNote({title : "", content : ""});
        event.preventDefault();
    }}>
        <input value={newNote.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={newNote.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
