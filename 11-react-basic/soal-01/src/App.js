import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {animeList.map((movie) => (
              <MovieCard key={movie.mal_id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;