import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import TodoWidget from "./components/TodoWidget";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <Toolbar />

      <div className="container">
        <Counter />

        <TodoWidget />
      </div>
    </>
  );
}

export default App;
