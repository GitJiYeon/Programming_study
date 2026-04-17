import { use } from 'react';
import Button from './Button.jsx';
import { useState } from 'react';
export default function TodoAdder({ addTodo }){
    const [inputTodo, setInputTodo] = useState('');
    //submit이면 handlesubmit 실행
    //handleSubmit
    //text 받아서 addTodo(text)
    const handleSubmit = (event) => {
        event.preventDefault(); //submit 기본 동작 막자
        if(!inputTodo) return;  //빈칸이면 그대로 return

        addTodo(inputTodo.trim());     //todos에 todo 추가하자
        setInputTodo('');       //input text 빈칸으로 하자
    }
    return(
        <form className="todo__form" onSubmit={handleSubmit}>
            <input 
                className="todo__input" 
                type="text" 
                placeholder="Enter your tasks here"
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
                    
                />
            <Button className="todo__button todo__button--add">Add</Button>
        </form>
    );
    
} 