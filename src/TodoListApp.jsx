import "./todolist.css";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import Button from "./components/Button.jsx";
import Checkbox from "./components/Checkbox.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItems from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
class Todo {
  constructor(text) {
    this.id = Date.now(); // 할 일 ID : 고유의 값 == new Date().getTime()
    this.text = text;
    this.isCompleted = false; // 할 일 완료 여부
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => setTodos((todos) => [...todos, new Todo(text)]);

  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoListApp;
