import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);

  const addTodo = () => {
    setTextArr([...textArr, text]);
    setText("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={text}
          className="form-control-lg mb-3"
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => addTodo()}>
          {""}
          Add
        </button>

        {textArr.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </header>
    </div>
  );
}

export default App;
