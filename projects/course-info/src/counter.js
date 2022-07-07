import React from "react";
import { useState } from "react";

const App = () =>{

    const [counter, setCounter] = useState(0)
    
    const increaseByOne = () => {
        setCounter(counter + 1)
    }
    const setToZero = () => {
        setCounter(0)
    }
    const decreaseByOne = () => {
        setCounter(counter - 1)
    }
    // setTimeout( () => setCounter(counter + 1), 1000)
    return(
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text='Plus' />
            <Button onClick={setToZero} text='Set To 0' />
            <Button onClick={decreaseByOne} text ='Minus' />
        </div>
    )
}

const Display = (props) =>{
    return(
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return(
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}
export default App;
