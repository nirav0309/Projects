import { useState } from "react"



function StateLess(){
    const [value, setValue] = useState(0);

    function handleClick(){
        setValue(value + 1)
    }

    return(
        <div>
            <Xyz val={value} something = {handleClick}/>

        </div>
        
    )
}


// function Xyz({something, value}){
//     return (
//         <button onClick={something}>Click {value}</button>
//     )
// }

function Xyz(props){
    return (
        <button onClick={props.something}>Click {props.val}</button>
    )
}

export {StateLess}