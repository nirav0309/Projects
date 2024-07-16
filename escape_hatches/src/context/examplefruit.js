import { useState } from "react";

const FruitsApp = () => {
    const [fruits] = useState([
      { fruitName: "apple", id: 1 },
      { fruitName: "apple", id: 2 },
      { fruitName: "plum", id: 3 },
    
    ]);
    return (
        <>
            <h1>Props example using context</h1>
            <Fruits fruits={fruits} />
            <FruitContainer fruits={fruits} />
        </>
    )
}

const Fruits = (props) => {
    return (
        <>
            {props.fruits.map((e) => <p key={e.id}>{e.fruitName}</p> )}
        </>
    )
}

const FruitContainer = (props) => {
    return (
        
        <>
            <h2>Total Fruits: { props.fruits.length}</h2>
        </>
    )
}

export {FruitsApp}