import Navbar from '../../layout/Navbar/Navbar';
import Home from '../../pages/Home/Home';
import MovieDetail from '../../pages/MovieDetail/MovieDetail';
import { Routes, Route } from 'react-router-dom'; 

export default function Main(){      
    return(
        <main>
            <Navbar />
            <Routes> 
                <Route path="/" element={<Home/> } /> 
                <Route path="/:slug" element={<MovieDetail/> } /> 
            </Routes>
        </main>
    )
}