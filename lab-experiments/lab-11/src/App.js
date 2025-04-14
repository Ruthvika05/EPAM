import React, { useState } from "react";
import { Student } from "./Student";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleAdd = () => {
    if (!name || !marks) return;
    const newStudent = new Student(name, Number(marks));
    setStudents([...students, newStudent]);
    setName("");
    setMarks("");
  };

  return (
    <div className="App">
      <h2>🎓 Student Grade System</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>

      <ul>
        {students.map((student, idx) => (
          <li key={idx}>
            <strong>{student.name}</strong> - Marks: {student.marks} - Grade:{" "}
            {student.calculateGrade()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
