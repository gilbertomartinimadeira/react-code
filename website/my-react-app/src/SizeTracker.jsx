import { useEffect, useState } from "react";
export default function SizeTracker() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect( () => {
        window.addEventListener('resize', handleResize);
        console.log('EVENT LISTENER ADDED')

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('EVENT LISTENER REMOVED')
        };
    } ,[]);


    useEffect( () => {
        document.title = `Size: ${width} x ${height}`
    },[width, height]);
    

    return (<div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>);
}