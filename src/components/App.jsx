import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  const [noteIndex, setNoteIndex] = useState(1);

  function addNote(newNote){
    setNote(prevValue => {
      return [{
        title : newNote.title, 
        content : newNote.content,
        key : noteIndex}, ...prevValue];
    });
    setNoteIndex(noteIndex + 1);
  }

  function deleteNote(key){
    setNote(prevValue => {
      return prevValue.filter((note) => note.key !== key)
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addNote} />
      {note.map(note => 
      <Note key={note.key} id={note.key}
        title={note.title}
        content={note.content}
        deleteButton={deleteNote} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
