import { useRef } from "react"
const Counter = () => {
    let ref = useRef(0);

    function handleClick(){
        ref.current = ref.current + 1;
        alert("click " + ref.current)
    }
    return (
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export {Counter}