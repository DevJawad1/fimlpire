import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import bootstrap from 'bootstrap'

import MovieCard from './movieCard'
// e1112302
const API_URL = 'https://www.omdbapi.com?apikey=e1112302'

const movie1 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovie = async (title) => {
        const respose = await fetch(`${API_URL}&s=${title}`);
        const data = await respose.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman')
    }, [])

    return (
        <div className="app">
            <div className="Title">
                <h1 className="text-center">Film</h1>
                <h1 className="text-center2">Pire</h1>
            </div>

            <div className="search">
                <input placeholder='search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <span className="icon" onClick={() => searchMovie(searchTerm)}>◯</span>
            </div>

            {movies?.length > 0
                
                    ? (
                        <div className='movie'>  
                           {movies.map((movie)=>(
                             <MovieCard movie={movie} />
                             ))}
                             </div>
                    ) :(
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    ) }
        </div>
    );
}

export default App;