import React from "react";

const MovieCard = ({ movie }) => {
    return (
            <div className="movie2">
            <div>
                <p className="year">{movie.Year}</p>
            </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} className="moviePic" />
                </div>
                <div className="discpt">
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
    )
}

export default MovieCard