export default function Checkbox(props){
    const {id, ...rest} = props; 

    return(
        <>
            <input className="todo__check" type="checkbox" id={`chk-${id}`}/>
            <label className="todo__label" htmlFor={`chk-${id}`}>temp text1</label>
        </>
    )
}