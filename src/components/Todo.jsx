import React from "react";
import { useState } from "react";

let nextId = 0;

function Todo() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
