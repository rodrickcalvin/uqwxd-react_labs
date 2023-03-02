import React, {useEffect, useState} from "react";
import "./App.css";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json)
  }, [todos])
  
  // Add the handlesubmit code here
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    }

    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert ("Enter Valid task");
      setTodo("");
    }
  }
  
  // Add the deleteToDo code here
  const deleteToDo = (itemId) => {
      setTodos([...todos].filter(todo => todo.id !== itemId));
  }
  
  // Add the toggleComplete code here
  const toggleComplete = (itemId) => {
    let updatedTodos = [...todos].map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed
      }
      return todo;
    })

    setTodos(updatedTodos);
  }
  
  // Add the submitEdits code here
  const submitEdits = (itemId) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === itemId) {
        todo.text = editingText;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  
return (
  <div className ="todo-list">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <input
          type ="text"
          align ="right"
          placeholder="Add a new task"
          onChange={e => setTodo(e.target.value)}
          value={todo}
        />
        <button type ="submit">Add Todo</button>
    </form>
    {/* list of todos */}
    <ul>
      {todos.map(todo => 
       <li className="todo" key={todo.id}>
         <div className="todo-text">
          <input
            type="checkbox"
            id="completed"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.id === todoEditing ? (
            <input
              type="text"
              placeholder={todo.text}
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <p>{todo.text}</p>
          )}
         </div>
         <div className="todo-actions">
           {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button> 
           ) : (
            <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
           )}

           <button onClick={() => deleteToDo(todo.id)}>Delete</button>
         </div>
       </li>
      )}
    </ul>
  </div>
);
};


export default App;
