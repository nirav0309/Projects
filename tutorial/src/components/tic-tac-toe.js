import ".././App.css";
import { useState } from "react";

function ParentComp() {
    const [sqr, setSqr] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const HandleClick = (i) => {
        // console.log("sqr", sqr)
        // const nextSqr = sqr.slice(); //creates a copy of the 'sqr' array using slice. to avoid directly mutating original state array.
        // nextSqr[i] = "X";
        // setSqr(nextSqr);
        // console.log("nextsqr",nextSqr)

        // sqr[i] = "x";
        // setSqr([...sqr])

        if (sqr[i] || calculateWinner(sqr)) {
            return;
        }

        if (xIsNext) {
            sqr[i] = "X";
        } else {
            sqr[i] = "O";
        }
        setSqr([...sqr]); //update the state with the modified sqr array
        setXIsNext(!xIsNext); // Toggle the player turn by flipping the boolean value of xIsNext


    };

    const winner = calculateWinner(sqr);
    var status;
    
    // if (winner) {
    //     status = "winner: " + winner; //method2
    // } 
    // else {
    //     status = "Next Player : " + (xIsNext ? "X" : "O");
    // }

    // status = winner ? `winner ${winner}` : `Next Player ${xIsNext ? 'X' : 'O'}`; //ternary operator //method2

    if(winner){
        status = "Winner : " + winner; //method3
    }
    else if(xIsNext){
        status = "Next Player : X";
    }
    else{
        status = "Next Player : O";
    }

    return (
        <div className="Main-Container">
            <div>{status}</div>
            <h1>Tic-Tac-Toe</h1>
            <div className="rows">
                <ChildComp value={sqr[0]} onSqrClick={() => HandleClick(0)} />
                <ChildComp value={sqr[1]} onSqrClick={() => HandleClick(1)} />
                <ChildComp value={sqr[2]} onSqrClick={() => HandleClick(2)} />
            </div>
            <div className="rows">
                <ChildComp value={sqr[3]} onSqrClick={() => HandleClick(3)} />
                <ChildComp value={sqr[4]} onSqrClick={() => HandleClick(4)} />
                <ChildComp value={sqr[5]} onSqrClick={() => HandleClick(5)} />
            </div>
            <div className="rows">
                <ChildComp value={sqr[6]} onSqrClick={() => HandleClick(6)} />
                <ChildComp value={sqr[7]} onSqrClick={() => HandleClick(7)} />
                <ChildComp value={sqr[8]} onSqrClick={() => HandleClick(8)} />
            </div>

        </div>
    );
}

function ChildComp({ value, onSqrClick }) {
    //   console.log("value===>>", value);
    return (
        <button className="btn" onClick={onSqrClick}>
          <span className="result"> {value}</span>   
        </button>
    );
}

function calculateWinner(sqr) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (sqr[a] === sqr[b] && sqr[a] === sqr[c]) {
            return sqr[a];
        }
    }
    // return null;
}

export { ParentComp };


