import TodoItems from "./TodoItem";
import TodoItemEmpty from "./TodoItemEmpty.jsx";

export default function TodoList({ todos }) {
  return (
    <ul className="todo__list">
      {/* todo에 값이 없으면, TodoItemEmpty  */}
      {todos.length === 0 && <TodoItemEmpty />}
      {/* todos에 값이 있으면, TodoItem에 todo에 넣자 */}
      {todos.length > 0 && todos.map((todo) => <TodoItems todo={todo} />)}
    </ul>
  );
}