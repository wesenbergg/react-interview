import React from 'react';
import './styles/App.css';
import './styles/animation.css';
import TodoContainer from './components/ToDoContainer';

/**
 * App.js olisi hyvä pitää siistinä.
 * Tähän vois lisätä routerin, jos sovellusta laajennetaan.
 */
const App = () => {
    return <TodoContainer />
}
 
export default App;