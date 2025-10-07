import React, { useEffect, useState } from 'react'

const About = () => {
  // const [count , setCount] = useState(0);
  const [userData, setUserData] = useState('');
  useEffect(()=>{
    fetchUser();
  },[]);
  if(userData.length === null){
    <h1>Loading....</h1>
  }
  const fetchUser = async ()=>{
    const data = await fetch('https://api.github.com/users/narahari27');
    const json = await data.json();
    console.log(json);
    setUserData(json);
  }
  const {followers,following,login,name,public_repos,avatar_url,url} = userData
  
  return (
    <div className="github-card">
  <img 
    src={avatar_url} 
    alt="GitHub Avatar" 
    className="avatar"
  />
  <div className="details">
    <h2>{name}</h2>
    <p className="username">{login}</p>
    <p className="bio">Creator of This Restaurant Project</p>
    
    <div className="stats">
      <div className="stat">
        <span className="count">{public_repos}</span>
        <span className="label">Repositories</span>
      </div>
      <div className="stat">
        <span className="count">{followers}</span>
        <span className="label">Followers</span>
      </div>
      <div className="stat">
        <span className="count">{following}</span>
        <span className="label">Following</span>
      </div>
    </div>

    <div className="info">
      <p>📍 Bengaluru, KA</p>
      <p>🏢 IOPEX Technologies</p>
      <p>🔗 <a href="">{url}</a></p>
    </div>

    <a href="https://api.github.com/users/narahari27" className="profile-link">
      View Profile
    </a>
  </div>
</div>
  )
}

export default About