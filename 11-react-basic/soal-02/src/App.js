import { Component } from "react";
// import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: false,
    };
  }

  async fetchMovieList() {
    const response = await fetch("https://api.jikan.moe/v3/top/anime");
    const result = await response.json();
    this.setState({
      movieList: result.top,
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.fetchMovieList();
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movieList !== this.state.movieList) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {this.state.isLoading 
            ? (<h1>Loading...</h1>) 
            : (this.state.movieList.map((movie) => (<MovieCard key={movie.mal_id} movie={movie} />)))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;