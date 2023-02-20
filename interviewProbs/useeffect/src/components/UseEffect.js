import {useEffect, useState} from "react";
import React from "react";

//Whenever a component loads first tinme in DOM it is in mounting phase - useEffect call back is called

//after mounting it is in update phase - useEffect will be called

export default function UseEffect() {
    const [state, setState] = useState(0);
    const increaseCount = () => {
        setState((state) + 1)
    }
    useEffect(() => {
        console.log("useEffect is called");
    }, [])  //call this callback function only at the time of rerender
  return <div>
    {console.log("hello jsx")};
        <h2>useEffect hook</h2>
        <h3>{state}</h3>
        <button onClick = {increaseCount}>COUNT</button>
  </div>;
}

