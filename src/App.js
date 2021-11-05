import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './component/MovieList';
import MovieCard from './component/MovieListHeading';
import SearchBox from './component/SearchBox';
import AddFavourites from './component/AddFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d4ce156a`

  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
};

  return (
    <div className='container-fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieCard heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} handleFavouriteClick={addFavouriteMovie} favouriteComponent={AddFavourites}/>
      </div>
    </div>
  );
};

export default App;
