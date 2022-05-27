import React, { useState } from "react";
import "./App.css";
import Login from "./components/pages/login"
import HeaderBar from "./components/header/header";
import SignUp from "./components/pages/signup";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        {/* <SignUp/> */}
        {/* <Dashboard/> */}
      </header>
    </div>
  );
}

export default App;
