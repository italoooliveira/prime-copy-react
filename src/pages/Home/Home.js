import { useEffect, useContext } from 'react';
import GenreRow from '../../components/GenreRow/GenreRow';
import { MoviesContext } from '../../contexts/MoviesContext';
import './Home.css';

export default function Home() {
    const {genres, movies} = useContext(MoviesContext);

    return (
      <div className="movie-genre">
        {genres && genres.map(genre => 
          <GenreRow 
            key={genre} 
            id={`genre-${genre}`} 
            genreName={genre} 
            movies={movies} />)}
      </div>  
    );
}