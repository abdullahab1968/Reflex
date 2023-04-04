import { useState } from "react";
import { MOVIES } from "./Constants";
// import SearchBar from "./SearchBar";
import Movie from "./Movie";
import './catalog.css'
function Catalog() {
  const [movies, setMovies] = useState(MOVIES);
  const [budget, setBudget] = useState(100);
  const [input, setInput] = useState('')

  const handleClick = (id) => {
    setMovies(movie =>
        movie.map(obj => {
          if (obj.id === id) {
            obj.isRented ? setBudget(budget + 3) : setBudget(budget - 3)
            return {...obj, isRented: !obj.isRented};
          }
  
          return obj;
        }),
      );
  }
  const updateInput = (event) => {
    setInput(event.target.value.toLowerCase());
  }
  
  const findMovies = (text) =>{
    return movies.filter(m => m.title.toLowerCase().includes(text))
  }
  return (
    <div className="catalog">
      <input placeholder="Search" value={input} onChange={updateInput} style={{width:"300px", display:'inline'}}></input>
      <span className="budget">budget ${budget}.00</span>
      <h2>Catalog</h2>
      <div className="movies row">
        {findMovies(input).map((m) => (
          <Movie id={m.id} img={m.img} isRented={m.isRented} onClickEvent={handleClick} />
        ))}
       
      </div>
      
      {findMovies(input).filter((m) => m.isRented).length>0 ?
       <div className="movies row">
        <h2>Rented</h2>
        {findMovies(input)
          .filter((m) => m.isRented)
          .map((m) => (
            <Movie id={m.id} img={m.img} isRented={m.isRented} onClickEvent={handleClick}/>
          ))}
      </div>: []}
    </div>
  );
}
export default Catalog;
