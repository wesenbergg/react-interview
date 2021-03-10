import React from 'react';

/**
 * Komponentti lomakkeelle.
 */
const Bar = ({onSubmit, newTodoName, onInputChange}) => {
  return (
    <form
      className="wrapper relative"
      style={{'gridTemplateColumns': '7fr 2fr'}}
      onSubmit={onSubmit}>
      <label className="label" htmlFor="todoInput">
        Add new todo
      </label>
      <input
        id="todoInput"
        placeholder="Take the dog out..."
        value={newTodoName}
        onChange={onInputChange}
      />
      <button
        className="btn btn-success"
        type="submit"
        value="Submit">
        Submit
      </button>
    </form>
  );
}
 
export default Bar;