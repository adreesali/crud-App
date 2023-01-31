import React from 'react';
import { Modal,  Switch,  Form, Input, Select ,  Collapse,  message, button,  FormInstance, Row, Space, Tag } from 'antd';

const TodosList = ({todos, setTodos, setEditTodo}) => {



    const handleComplete = (todo) => {
      setTodos(
        todo.amp((item) =>{
          if(item.id === todo.id) {
            return{ ...item, completed: !item.commpleted}
          }
          return item;
        })
      );
    };

    const handleEdit = ({id}) => {
      const findTodo = todos.find((todo) => todo.id === id);
      setEditTodo(findTodo);
    }


   const handleDelete = ({ id }) => {
     setTodos(todos.filter((todo) => todo.id !==id))
   }

  return (
    <>
    <div>
      {todos.map((todo) => (
        <Row className="todo-list" key={todo.id}>
          <input 
          type="text"
           value={todo.title}
          className="list" 
          onChange={(event) => event.preventDefault()} 
          />
          <div className="">
            <button className="button-complete task-button">
              <i className="fa fa-check-circle"></i>
            </button> 
            <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
              <i className="fa fa-edit"></i>
              Edit
              </button>
              
            <button type="submit" className="button-delete task-button" onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        </Row >
  ))}
    </div>
    </>
  )
}

export default TodosList;