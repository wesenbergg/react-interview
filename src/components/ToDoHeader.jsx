import React from 'react';

//Tämä komponentti renderöi gridin otsikko rivin
const ToDoHeader = () => {
  return ( 
    <div className="wrapper title">
      <p>Job</p>
      <p className="border-header">Status</p>
      <p>Remove</p>
    </div>
   );
}
 
export default ToDoHeader;