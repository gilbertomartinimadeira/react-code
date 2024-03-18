import { useEffect, useRef } from "react";

export default function RefComponent(){

    //let [number, setNumber] = useState(0);

    // const ref = useRef(0);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    // console.log(ref);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef);
    });

    function handleClick() {            
        inputRef.current.focus();
        inputRef.current.style.backgroundColor ='yellow';
        inputRef2.current.style.backgroundColor ='';
        inputRef3.current.style.backgroundColor ='';
    }

    function handleClick2() {            
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor ='yellow';
        inputRef.current.style.backgroundColor ='';
        inputRef3.current.style.backgroundColor ='';
    }

    function handleClick3() {            
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor ='yellow';
        inputRef2.current.style.backgroundColor ='';
        inputRef.current.style.backgroundColor ='';
    }

    return (
        <>
        <button onClick={handleClick}>
                Click Me!
        </button><br/>
        <input ref={inputRef} type="text" ></input>
        <br/>
        <button onClick={handleClick2}>
                Click Me2!
        </button><br/>
        <input ref={inputRef2} type="text" ></input>
        <br/>
        <button onClick={handleClick3}>
                Click Me3!
        </button><br/>
        <input ref={inputRef3} type="text" ></input>
        </>);
}