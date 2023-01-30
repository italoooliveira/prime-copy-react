import GenreRowCard from '../GenreRowCard/GenreRowCard';
import './GenreRow.css';

export default function GenreRow({
    id,
    genreName,
    movies,
}){
    const hasOneItem = (movies && movies.filter(movie => movie.genres.includes(genreName)).length < 2);
    const hasFiveOrMoreItems = (movies && movies.filter(movie => movie.genres.includes(genreName)).length >= 5);

    const scrollToLeft = (id) => {
        var element = document.getElementById(id);

        element.scrollTo({
            left:element.scrollLeft - 200,
            top: 0,
            behavior: "smooth"
        });
    }
    
    const scrollToRight = (id) => {
        var element = document.getElementById(id);

        element.scrollTo({
            left:element.scrollLeft + 200,
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="genre-row">
            <h2>{ genreName }</h2>
            {
            hasFiveOrMoreItems || !hasOneItem && screen.width < 768 ? 
            <>
                <button onClick={() => scrollToLeft(id)} className="left"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                <button onClick={() => scrollToRight(id)} className="right"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
            </> : null
            }
            <div id={id} className="genre-row-movies">
            {movies && 
            movies
                .filter(movie => movie.genres.includes(genreName))
                .map(movie => 
                    <GenreRowCard 
                        movieId={movie.id}
                        slug={movie.slug} 
                        thumbnail={movie.backdrop} 
                        title={movie.title} />)}
            </div>
        </div>
    );
}