import React, {useState} from "react";
import { Action } from "../Action/action";
import { useDispatch, useSelector } from "react-redux";



export default function NewUser(props) {
    const [userData, setUserData] = useState('Shruti');
    const dispatch = useDispatch();
    const sendData = () => {
        Action(userData, dispatch);

    }
    const data = useSelector((storeData) => {
        return storeData.users;
        
    })
   
  return <div>
    <input placeholder="Enter" value = {userData} onChange ={(e)=> {setUserData(e.target.value)}}/>
    <button onClick={sendData}>ADD USER</button>
    {data.map((elem) => {
        return <h2>{elem}</h2>
    })}
  </div>;
}
