import React, { useState } from "react";
import "./TodoWidget.css";
import Input from "../Input";
import Button from "../Button";

const initialTodos = [
  {
    id: Math.random(),
    title: "Todo 1",
    text: "Todo 1 text...",
    isCompleted: false,
  },
  {
    id: Math.random(),
    title: "Todo 2",
    text: "Todo 1 text...",
    isCompleted: true,
  },
  {
    id: Math.random(),
    title: "Todo 3",
    text: "Todo 1 text...",
    isCompleted: false,
  },
];

function TodoItem({ todo, onDelete, onToggle }) {
  const messageClass = todo.isCompleted ? "success" : "error";

  return (
    <div className="card">
      <h6 className="card-title">{todo.title}</h6>

      <p>{todo.text}</p>

      <p className={`card-message ${messageClass}`}>
        {todo.isCompleted ? "Completed" : "Not Completed!"}
      </p>

      <div className="card-actions">
        <Button color="danger" handleClick={() => onDelete(todo.id)}>
          Delete
        </Button>

        <Button color="secondary" handleClick={() => onToggle(todo.id)}>
          Toggle Completed
        </Button>
      </div>
    </div>
  );
}

function TodoWidget() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoForm, setTodoForm] = useState({ title: "", text: "" });

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.random(),
      isCompleted: false,
      ...todoForm,
    };

    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const deleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(filteredTodos);
  };

  const toggleTodo = (todoId) => {
    const toggledTodos = todos.map((todo) => {
      if (todo.id !== todoId) return todo;

      return { ...todo, isCompleted: !todo.isCompleted };
    });

    setTodos(toggledTodos);
  };

  return (
    <div>
      <h2>Todo Widget</h2>

      <div className="card form-wrapper">
        <form onSubmit={addTodo}>
          <Input
            label="Todo Title"
            placeholder="Enter your todo title..."
            id="todo-title"
            handleChange={(event) =>
              setTodoForm({ ...todoForm, title: event.target.value })
            }
          />

          <Input
            label="Todo Text"
            placeholder="Enter your todo text..."
            id="todo-text"
            handleChange={(event) =>
              setTodoForm({ ...todoForm, text: event.target.value })
            }
          />

          <Button type="submit">Add Todo</Button>
        </form>
      </div>

      <div className="todos-wrapper">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoWidget;
