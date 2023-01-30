import { Link } from 'react-router-dom';
import './GenreRowCard.css';

export default function GenreRowCard({
    slug, 
    thumbnail, 
    title,
}){
    return (
        <div className="genre-row-card">
            <Link to={`${slug}`}>
                <img src={thumbnail} />
            </Link>
            <div className="genre-row-card-footer">
                <Link to={`${slug}`}>
                    {title}
                </Link>
            </div>
        </div>
    );   
}