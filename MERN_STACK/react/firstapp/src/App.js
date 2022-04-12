import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [arr, setArr]= useState(["a","b","c","d","e"])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
        {/* <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text"
        />
      
        <p>{text}</p> */}
        {arr.map((e, i)=>{return <h1>{e}</h1>})}
      <p></p>
      </header>
    </div>
  );
}

export default App;
