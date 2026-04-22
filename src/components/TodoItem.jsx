import Button from './Button.jsx';
import Checkbox from './Checkbox.jsx';
export default function TodoItem({todo}){
    return(
        // todo.isCompleted가 true면 todo__item--complete 클래스 추가, 아니면 말기~
        <li className={`todo__item${todo.isCompleted ? " todo__iem--complete" : ""}`}>
                    <Checkbox id={todo.id}> {todo.text}</Checkbox>
                    
                    <Button className="todo__button todo__button--edit" >✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
    );
}