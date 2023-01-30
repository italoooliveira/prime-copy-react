import React, { useState, useContext } from "react";
import { MoviesContext } from '../../contexts/MoviesContext';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [internalSearch, setInternalSearch] = useState("");
    const { setSearch } = useContext(MoviesContext);
    
    const handleChange = (event) => {
        setInternalSearch(event.target.value);
    }

    const search = (event) => {
        event.preventDefault();

        setSearch(internalSearch);
        navigate(`/?q=${internalSearch}`, { replace: true });
    }

    return (
        <nav className="navbar">
            <div className="menu-container">
                <div className="menu-logo">Wookie Logos</div>
                <div className="menu-items">
                    <form onSubmit={e => search(e)}>
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                        <input placeholder="Search" onChange={handleChange}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}