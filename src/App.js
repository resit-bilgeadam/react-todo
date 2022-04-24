import s from "./App.module.css";
import React from "react";
import Counter from "./components/Counter";
import TodoWidget from "./components/TodoWidget";
import Toolbar from "./components/Toolbar";
import Carousel from "./components/Carousel";

const images = [
  "https://unsplash.it/1440/450",
  "https://unsplash.it/1440/449",
  "https://unsplash.it/1440/451",
];

function App() {
  return (
    <>
      <Toolbar />

      <Carousel images={images} />

      <div className={s.container}>
        <div className="card">
          <button className="btn primary">Click me!</button>
        </div>

        <Counter />

        <TodoWidget />
      </div>
    </>
  );
}

export default App;
