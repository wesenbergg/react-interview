import React from 'react';

/**
 * ToDo komponentti yksittäisen todo-palikan renderöintiin.
 */
const ToDo = ({index, todo, onClickStatus, onRemoveClick}) => {
  const color = todo.complete ? 'lightgreen': 'pink';
  const text = todo.complete ? 'Complete': 'Incomplete';

  //Hauska algoritmi värien generointiin :D
  const todoColor = `rgba(${(index*10%175)+80},${(index*25%175)+80},${(index*50%175)+80},200)`

  return (
    <div className="wrapper slide-in-left">
      <div
      className="todo"
      style={{backgroundColor: todoColor}}
      >
        <h3>{todo.name}</h3>
      </div>
      <button
        className="status-btn"
        style={{backgroundColor: color}}
        onClick={() => onClickStatus()}>
        {text}
      </button>
      <div className="relative">
        <button className="remove-btn"
          onClick={() => onRemoveClick()}>
          X
        </button>
      </div>
    </div>
  );
}
 
export default ToDo;