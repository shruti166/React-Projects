import React, { useState } from "react";
import { Action } from "../Action/Action";
import { useDispatch } from "react-redux";

export default function User(props) {
    const [userData, setUserData] = useState("Shruti");
    const getUsers = () => {
     fetch("").then((res) => res.json()).then((res2)=> console.log(res2))

    }
    const dispatch = useDispatch();


    const sendDataToUserAction = () => {
       Action(userData, dispatch);
      };
  return <div>
    <input />
    <button onClick={sendDataToUserAction}>Search</button>
  </div>;
}