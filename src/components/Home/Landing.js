import { useState } from 'react';
import './style.css'
import User from "./User";

function Landing() {
  const [usersData, setUsersData] = useState({"Mona":"blue", "Jasmyne":"red" , "Aura":"green" , "Tina":"Yellow"})
  return (
    <div className="Landing">
      <h1 style={{color:'whitesmoke'}}>WHO'S WATCHING?</h1>
      <div className="Users">
        {Object.keys(usersData).map(u => <User name={u} color={usersData[u]}/>)}
      </div>
    </div>
  );
}

export default Landing;
