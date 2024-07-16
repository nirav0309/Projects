import { useState, useRef } from "react"
import { flushSync } from "react-dom";
const ScrollView = () => {
    const listRef = useRef(null);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(
      initialTodos
    );

    const handleClick = () => {
        flushSync(()=>{
            setTodos([...todos, {id: nextId++, text: text}]) //using flushSync 
            setText('');
        })
        
        // setTodos([...todos, {id: nextId++, text: text}]) //this will lag the scroll view when we add new data
        // setText('');
        
        listRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
    return (
        <>
            <button onClick={handleClick}>Add</button>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <ul ref={listRef}>
                {todos.map((e)=>{
                    return (
                        <li key={e.id}>
                            {e.text}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

let nextId = 0;
const initialTodos = [];
for(let i = 0; i<10; i++){
    initialTodos.push({
        id: nextId++,
        text: 'todo' + (i + 1)
    })
}

export {ScrollView}