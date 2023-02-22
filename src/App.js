import React from "react";
import Navbar from "./components/Navbar";
import Developing from "./components/Developing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Developing />
      </main>
    </div>
  );
}

export default App;
