import "./App.css";
import Landing from "./components/Home/Landing";
import Catalog from './components/Catalog/Catalog'
import MovieDetails from './components/MovieDetails/MovieDetails'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/" id="home"> Home </Link>
          <Link to="/catalog"> Catalog </Link>
          <span className="logo">REFLIX</span>
        </header>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/movies/:id" element={<MovieDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
