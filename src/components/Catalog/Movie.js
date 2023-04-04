import "./movie.css";
import {Link} from 'react-router-dom'
function Movie({ id, img, isRented, onClickEvent }) {
    function handleClick(){
        onClickEvent(id)
    }
  return (
    <div className="movie col s3">
      
      {isRented ? (
        <i className="material-icons button" onClick={handleClick}>remove_circle_outline</i>
      ) : (
        <i className="material-icons button" onClick={handleClick}>add_circle_outline</i>
      )}
      <Link to={`/movies/${id}`}> 
      <img className='img'src={`${img}`} alt="img" />
      </Link>
    </div>
  );
}

export default Movie;
