import React, { useEffect, useState } from "react";
import axios from "axios";

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch user's notes from the backend
    const fetchNotes = async () => {
      try {
        const response = await axios.get("/notes");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              {note.text} - {new Date(note.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
