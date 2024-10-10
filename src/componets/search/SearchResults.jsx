import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import Loading from "../loading/Loading";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]); // Change state to store an array of movies

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      fetchMovies(query);
    }
  }, [location]);

  const fetchMovies = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=fdb40da8ee7fc72a5fe86ecd8b066608&query=${query}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.results.length > 0) {
          setMovies(json.results); // Set the entire array of results
        } else {
          setMovies([]); // Clear movies if no results found
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the movie details page
  };

  if (movies.length === 0)
    return (
      <div className=" w-full items-center flex justify-center">
        <Loading />
      </div>
    );

  return (
    <div className="">
      <h1 className="text-3xl font-bold">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-white p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold my-2">{movie.title}</h2>
            <p className="text-sm">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
