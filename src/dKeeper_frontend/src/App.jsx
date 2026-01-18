import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";
import { dKeeper_backend } from "../../declarations/dKeeper_backend";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    dKeeper_backend.createNote(newNote.title, newNote.content);
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  async function fetchNotes() {
    const noteArray = await dKeeper_backend.readNotes();
    setNotes(noteArray);
  }

  function deleteNotes(id) {
    dKeeper_backend.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
