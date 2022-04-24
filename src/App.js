import s from "./App.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todo-widget" element={<TodoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
