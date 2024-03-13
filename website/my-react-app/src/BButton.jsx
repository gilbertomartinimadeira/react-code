function BButton(){

    //let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;        
    //         console.log(`${name} clicked me ${count} time/s`);
    //     }else{
    //         consoleW.log(`${name} stop clicking me`);
    //     }
    // };

    const handleClick = (e) => {
        e.target.textContent = "OUCH";
    }

    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me`);
    // }
    return (
        <button onClick={(e) => handleClick(e)}>Click me !</button>
    );
}

export default BButton