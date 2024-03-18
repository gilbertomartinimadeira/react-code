import { useState, useEffect } from "react";

export default function NewComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect( () => {
        document.title = `${count}`;

        return () => {
            // cleanup code
        };
    },[count]);

    function addCount() {
        setCount(c => ++c );
    }

    function subtractCount() {
        setCount(c => --c );
    }

    function changeColor() {
        setColor(c => c === 'green' ?`red`:'green');
    }
    return (<>
        <p style={{'color': color}}>Count: {count} {color}</p>

        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>

        <button onClick={changeColor}>Change Color</button>
    

    </>);
}