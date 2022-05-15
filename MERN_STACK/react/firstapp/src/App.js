import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardApp from "./card/cardapp";

function App() {
  const [showCard, setShowCard] = useState(false);
  const showCardApp = () => {
    setShowCard(!showCard);
  };
  return (
    <div className="App">
      <header className="App-header">
        
          <CardApp />
      
      
      </header>
    </div>
  );
}

export default App;
