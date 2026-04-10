import './todoList.css';
function TodoListApp(){
    
    return(
        <div className="todo">
            <h1 className="todo__title">No Think, Do Tt.</h1>
            <form className="todo__form">
                <input className="todo__input" type="text" placeholder="Enter your tasks here"></input>
                <button className="todo__button todo__button--add">Add</button>
            </form>
            <ul className="todo__list">
                <li className="todo__item todo__item--empty">
                    <p>할 일 없음.</p>
                </li>
                <li className="todo__item todo__item--complete">
                    <input className="todo__check" type="checkbox" id="chk-1"/>
                    <label className="todo__label" htmlFor="chk-1">temp text1</label>
                    <button className="todo__button todo__button--edit" >✏️</button>
                    <button className="todo__button todo__button--delete">❌</button>
                </li>
            </ul>
        </div>
    );

}

export default TodoListApp;