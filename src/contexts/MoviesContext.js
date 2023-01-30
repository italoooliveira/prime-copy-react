import { createContext, useState, useEffect } from "react";
import Main from '../components/Main/Main';

const MoviesContext = createContext();

function MainWithContext () {
    const [search, setSearch] = useState("");
    const [genres, setGenres] =  useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        var allGenres = [];

        const getAllGenres = (movies) => {
            movies.map(movie => {
                movie.genres.map(genre => {
                    if(!allGenres.includes(genre)) allGenres.push(genre);
                })
            })
        }

        const fetchData = async () => {
            const url = search !== "" ? `https://wookie.codesubmit.io/movies?q=${search}` : "https://wookie.codesubmit.io/movies"
            const response = await fetch(url, {
            headers: {
                "Authorization": 'Bearer Wookie2021',       
                "Accept": 'application/json',
                'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            const movies = json.movies;
            setMovies(movies);
            
            getAllGenres(movies);
            setGenres(allGenres);
        }
        fetchData();
    }, [search]);

    return(
        <MoviesContext.Provider value={{ genres, setGenres, movies, setMovies, search, setSearch }} >
            <Main />
        </MoviesContext.Provider>
    )
}

export { MoviesContext, MainWithContext};