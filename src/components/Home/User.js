import { Link } from "react-router-dom";
import './style.css'

function User({ name, color}) {

    return (
      <Link to="/catalog">
      <div className="col s2 user" style={{backgroundColor: `${color}`}}>
        <span className="username">{name}</span>
      </div>
      </Link>
    );
  }
  
  export default User;