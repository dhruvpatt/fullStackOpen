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
    // setTimeout( () => setCounter(counter + 1), 1000)
    return(
        <div>
            <Display counter={counter} />
            <button onClick={increaseByOne}>Add One</button>
            <button onClick={setToZero}>Set to Zero</button>
        </div>
    )
}

const Display = (props) =>{
    return(
        <div>{props.counter}</div>
    )


}
export default App;
