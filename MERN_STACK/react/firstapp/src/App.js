import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Alert, Card ,Form} from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [arr, setArr]= useState(["1","2","3","4","5"])
  const [text, setText] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter your Memo" ></Form.Control>
          </Form.Group>
        </Form>
        
      
        <p>{text}</p>
        {arr.map((e, i)=>{return <h1>{e}</h1>})}
      <p></p>
      </header>
    </div>
  );
}

export default App;
