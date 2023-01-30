import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesContext } from '../../contexts/MoviesContext';
import MovieText from '../../components/MovieText/MovieText';
import './MovieDetail.css';

export default function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState([]);
    const location = useLocation();
    const { movies } = useContext(MoviesContext);

    useEffect(() => {
        var path = location.pathname.replace("/","");
        var movie = movies.filter(movie => movie.slug == path);
        setMovieDetail(movie);
    }, [movies])

    return (
        <div className="movie-detail">
                {movieDetail && movieDetail.map(detail => (
                    <>
                        <div className="movie-detail-thumb">
                            <img src={detail.poster}  alt="teste" />
                        </div>
                        <MovieText 
                            title={detail.title} 
                            rating={detail.imdb_rating}
                            released_on={detail.released_on}
                            length={detail.length}
                            director={detail.director}
                            overview={detail.overview}/>
                    </>
                ))}
        </div>
    )
}