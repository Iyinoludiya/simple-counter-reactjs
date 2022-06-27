import React, {useState} from "react";

    const Counter = () => {
    const[counter, setCount]=useState(0)

    function increaseCount() {
        setCount(counter + 1)
    }

    function decreaseCount() {
        setCount(counter - 1)
    }

    function resetCount() {
        setCount(0)
    }


    return (
        <div>
            <React.Fragment>
            <h2 id="counter-value">Count: {counter}</h2>
            <button id="increase-button" onClick= {increaseCount}>Increase Count</button>
            <button id="decrease-button" onClick= {decreaseCount}>Decrease Count</button>
            <button id="reset-button" onClick= {resetCount}>Reset Count</button>
            </React.Fragment>
        </div>
    )
}

export default Counter
