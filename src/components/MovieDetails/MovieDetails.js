import { useParams } from "react-router"
import { MOVIES } from "../Catalog/Constants";
import './movieDetails.css'
function MovieDetails(){
    let {id} = useParams()
    id = parseInt(id)
    const movieDetails = MOVIES.filter(m => m.id === id)[0]

    return (
        <div className="movieDetails">
            <h1>{movieDetails.title} ({movieDetails.year})</h1>
            <img src={`${movieDetails.img}`} alt="img" />
            <span id='description'>{movieDetails.descrShort}</span>
        </div>
    )
}
export default MovieDetails