import React, {useState} from "react";
import { Action } from "../Action/action";
import { useDispatch } from "react-redux";


export default function NewUser() {
    const [userData, setUserData] = useState('Shruti');
    const dispatch = useDispatch();
    const sendData = () => {
        Action(userData, dispatch);

    }
  return <div>
    <input placeholder="Enter" value = {userData} onChange ={(e)=> {setUserData(e.target.value)}}/>
    <button onClick={sendData}>ADD USER</button>
  </div>;
}
