
function TodoListApp(){
    
    return(
        <div>
            <h1>No Think, Do Tt.</h1>
            <form>
                <input type="text" placeholder="Enter your tasks here"></input>
                <button>Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="chk-1"/>
                    <label htmlFor="chk-1">temp text1</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>
            </ul>
        </div>
    );

}

export default TodoListApp;