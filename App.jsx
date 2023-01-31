  import React, { useEffect, useState } from "react";
import "./App.css";
import Header from './components/Header';
import Form from './components/Form';
import TodosList from "./components/TodosList";

const App = () => {
     
  // const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(); 
  // const [todos, setTodos]= useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  // useEffect (() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])

  return(
    <> 
    <div className="container">
      <div className="app-wrapper">
    <div>
      <Header/>
    </div>
    <div className="">
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodos={editTodo}
      setEitTodo={setEditTodo}

      />
      <div className="">
        <TodosList 
        todos={todos} 
        setTodos={setTodos}  
        setEditTodo={setEditTodo}/>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App;