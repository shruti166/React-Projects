import React from "react";
import { useState, useEffect } from "react";

export default function Profile({userName}) {
    const[loading, setLoading] = useState(false);
    const[profile, setProfile] = useState({});


    useEffect(()=> {
        async function fetchData() {
            const pro = await fetch(`https://api.github.com/users/${userName}`);
            const result = await pro.json();


            if(result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData()
    }, [userName])
  return <div>
    <h2>About me</h2>
    {loading ? (
        <span>Loading...</span>
    ) : (
        <ul>
            <li>avatar_url : <div><img
            className='Profile-avatar'
            src={profile.avatar_url}
            alt={profile.name}/></div></li>
            <li><span>html_url : </span>{profile.html_url}</li>
            <li><span>repos_url : </span>{profile.repos_url}</li>
            <li><span>name: </span>{profile.name}</li>
            <li><span>location: </span>{profile.location}</li>
            <li><span>bio: </span>{profile.bio}</li>
            

            
        </ul>
    )}
  </div>;
}
