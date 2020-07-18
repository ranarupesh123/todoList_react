import React from 'react';

const ToDoList = (props) =>{

  return (
    <>
      <div className="todo_style">
        <button className="Delete" onClick={()=>{
          props.onSelect(props.id);
        }}>X</button>
        <li className ="list_style">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;