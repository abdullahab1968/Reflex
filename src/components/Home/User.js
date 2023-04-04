import { Link } from "react-router-dom";

function User({ name, color}) {

    return (
      <Link to="/catalog">
      <div className="User" style={{backgroundColor: `${color}`, height: "100px", width:"200px"}}>
        {name}
      </div>
      </Link>
    );
  }
  
  export default User;