import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios"

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://developer.nrel.gov/api/transportation-incentives-laws/v1.json?api_key=84cRecMjia66wewfe0cBcwWpfn7t53DJSdFSJY4R')
    .then((res) => setData(res.data.result))
    .catch((err) => console.log(err))
  }, [])
  return (
    <div>
     {data.map((elem) => {
      return <div key = {elem.id}>{elem.title}</div>
     })}
    </div>
  )
}
