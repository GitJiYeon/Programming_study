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

  const toggleTodo = (id) => {
    setTodos((todos) =>
        //todos에서 하나씩 꺼내 todo. todo의 id와 id가 같으면 기존 todo.isCompleted 값 수정. 아니면 그대로
        todos.map((todo) =>
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
        )
    )
  }
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoListApp;
