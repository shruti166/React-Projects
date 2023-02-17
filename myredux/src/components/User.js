import React, { useState } from "react";
import { Action } from "../Action/Action";
import { useDispatch } from "react-redux";

export default function User(props) {
    const [userData, setUserData] = useState("Shruti");
    const dispatch = useDispatch();


    const sendDataToUserAction = () => {
       Action(userData, dispatch);
      };
  return <div>
    <input type = "text" placeholder = "Enter" value = {userData} onChange = {(e)=>setUserData(e.target.value)}/>
    <button onClick={sendDataToUserAction}>Search</button>
  </div>;
}
