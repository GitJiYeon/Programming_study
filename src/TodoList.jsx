import './todoList.css';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx';
function TodoListApp(){
    
    return(
        <div className="todo">
            <h1 className="todo__title">No Think, Do Tt.</h1>
            <form className="todo__form">
                <input className="todo__input" type="text" placeholder="Enter your tasks here"></input>
                <Button className="todo__button todo__button--add">Add</Button>
            </form>
            <ul className="todo__list">
                <TodoItemEmpty/>
                <li className="todo__item todo__item--complete">
                    <Checkbox id="1"/>
                    
                    <Button className="todo__button todo__button--edit" >✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
            </ul>
        </div>
    );

}

export default TodoListApp;