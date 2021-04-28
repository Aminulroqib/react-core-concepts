import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['a', 'b', 'C', 'sd']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Developer</p>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        <Person name='Islam' job='JavaScript'></Person>
        <Person name='Roqib' job='HTML/CSS'></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleCount = () => setCount(count + 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> increase </button>
      <button onMouseOver={() => setCount(count - 1)}> decrease </button>
    </div>  
  )
    
}
function Person(props) {
  return (
    <div style={{ border: "2px solid red", margin: '10px' }}>
      <h1>Name:{props.name}</h1>
      <h2>Job:{props.job} </h2>

    </div>

  )

}

export default App;
