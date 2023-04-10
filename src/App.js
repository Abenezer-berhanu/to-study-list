import React, { useState } from "react";
import Input from "./components/Input";
import Notes from "./components/Notes";
import Header from "./components/Header";
import "./style.css"


function App() {
  const [notes, setNotes] = useState([]);

  function handleSubmit(input) {
    setNotes((prev) => {
      return [...prev, input];
    });
  }

  function deleteNode(id) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Input submit={handleSubmit} />
      {notes.map((note, index) => {
        return (
          <Notes
            title={note.title}
            content={note.content}
            id={index}
            key={index}
            onDelete={deleteNode}
          />
        );
      })}
    </div>
  );
}

export default App;
