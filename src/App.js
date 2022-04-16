import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Input from "./components/Input";
import React from "react";
import TodoWidget from "./components/TodoWidget";

function App() {
  const [text, setText] = React.useState("");

  const alertMsg = () => {
    alert("Hello from App");
  };

  const log = () => {
    console.log("Hello Log!");
  };

  const logInput = (event) => {
    setText(event.target.value);
  };

  const resetInput = () => {
    setText("");
  };

  return (
    <div className="container">
      <Title color="red" background="dark">
        Hello React
      </Title>

      <Title color="blue" background="light">
        React Title
      </Title>

      <Title color="green" background="yellow">
        First Component
      </Title>

      <Button handleClick={alertMsg}>Alert!</Button>
      <Button handleClick={log}>Console log!</Button>

      <Counter />

      <Title>{text}</Title>
      <Input
        id="username"
        label="Text"
        placeholder="Enter your username..."
        handleChange={logInput}
        value={text}
      />
      <Button handleClick={resetInput}>Reset Input!</Button>
      <Input
        id="email"
        label="Email"
        placeholder="Enter your email..."
        type="email"
      />

      <TodoWidget />
    </div>
  );
}

export default App;
