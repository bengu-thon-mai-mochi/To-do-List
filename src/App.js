import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Counter from './Counter';

function App(){
  return (
    <div className="wrapper">
      <header>
        <h1>Things! {'{To-do}'}</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <footer>
        <Counter />
      </footer>
    </div>
  )
}

export default App;
