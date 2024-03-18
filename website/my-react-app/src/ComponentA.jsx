import { useState,createContext } from "react";

export const UserContext = createContext();

import ComponentB from "./ComponentB";

export default function ComponentA() 
{


    const [user, setUser] = useState('Gilberto');

    function handleUserChange(event) {
        setUser(event.target.value);
    }
    return (
            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>

                <input type="text" 
                      value={user} 
                   onChange={handleUserChange}
                placeholder="Enter a new name"></input>
            </div>
    );
}