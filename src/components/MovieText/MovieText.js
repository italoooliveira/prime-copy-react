import './MovieText.css';

export default function MovieText({
    title, 
    rating,
    released_on,
    length,
    director,
    overview
}) {
    return (
        <div className="movie-detail-text">
            <div className="movie-detail-head">
                <h1 className="movie-detail-head-title">{title} ({rating})</h1>
                <div className="movie-detail-head-rate"></div>
            </div>
            <div className="movie-detail-body">
                <p>{released_on} | {length} | {director}</p>
                <p>
                    {overview}
                </p>
            </div>
        </div>
    )
}