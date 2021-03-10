import React, { useState } from 'react';
import data from '../initialData';
import Bar from './Bar';
import ToDo from './ToDo';
import ToDoHeader from './ToDoHeader';

/**
 * Tämä komponentti toimii alustana todo-palikoille, otsikoille
 * ja lomakkeelle.
 */
const TodoContainer = () => {
  const [newTodoName, setNewTodoName] = useState('')
  const [todos, setTodos] = useState(data)

  
  // switchi jolla muutetaan todon statuksen tilaa
  const onClickStatus = (i) =>
    setTodos(
      todos.map((e, j) =>
        j === i ? { ...e, complete: !e.complete }: e
      )
    )

  //onSubmitin apufunktio todon generoimiseen
  const generateTodo = (name) => 
    ({ id: todos.length+1, name, complete: false })
  
  //Funktio luo uuden todon
  const onSubmit = (e) => {
    e.preventDefault()
    setTodos([ ...todos, generateTodo(newTodoName)])
    setNewTodoName('')
  }

  return (
    <div className="container">
      <h1 className="title">To-To-Doo!</h1>
      <Bar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={({ target }) =>
          setNewTodoName(target.value)}
      />
      <ToDoHeader />
      <div id="todoContainer">
        {todos.map((e, i) => 
          <ToDo
            key={i}
            todo={e}
            index={i}
            onClickStatus={() => onClickStatus(i)}
            onRemoveClick={() =>
              setTodos(todos.filter((_, j) => i !== j))
            }
          />
        )}
      </div>
    </div>
  );
}
 
export default TodoContainer;