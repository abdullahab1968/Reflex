import { useState } from 'react';
import './style.css'
import User from "./User";

function Landing() {
  const [usersData, setUsersData] = useState({"Mona":"#2196f3 ", "Jasmine":"#b71c1c " , "Aura":"#00796b " , "Tina":"#9e9d24"})
  return (
    <div className="Landing">
      <h1 style={{color:'whitesmoke'}}>WHO'S WATCHING?</h1>
      <div className="row users">
        {Object.keys(usersData).map(u => <User name={u} color={usersData[u]}/>)}
      </div>
    </div>
  );
}

export default Landing;
