import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleAddNote = async (e) => {
    e.preventDefault();

    // Add the new note to the backend
    try {
      const response = await axios.post("/notes", { text });
      onAddNote(response.data);
      setText("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <form onSubmit={handleAddNote}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
