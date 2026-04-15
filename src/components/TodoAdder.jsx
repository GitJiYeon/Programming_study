import Button from './Button.jsx';
export default function TodoAdder({ addTodo }){
    //submit이면 handlesubmit 실행
    //handleSubmit
    //text 받아서 addTodo(text)
    return(
        <form className="todo__form">
            <input className="todo__input" type="text" placeholder="Enter your tasks here"></input>
            <Button className="todo__button todo__button--add">Add</Button>
        </form>
    );
    
} 