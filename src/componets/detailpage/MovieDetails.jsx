import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { CiPlay1 } from "react-icons/ci";
import Loading from "../loading/Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false); // State to handle error
  const navigate = useNavigate(); // Hook to navigate

  const getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fdb40da8ee7fc72a5fe86ecd8b066608&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Movie not found"); // Throw error if response is not OK
        }
        return res.json();
      })
      .then((json) => setMovie(json))
      .catch((err) => {
        console.error(err);
        setError(true); // Set error state to true
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="text-white text-center">
        <h1 className="text-2xl">Movie Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 hover:bg-blue-800 text-white px-4 py-2"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="p-4 relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-3xl font-bold md:hidden text-white ">
          {movie.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-[90%] mr-10">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="my-4 rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-bold hidden md:flex text-white my-2">
                {movie.title || movie.name}
              </h1>
              <p className="text-lg text-white">{movie.media_type}</p>
              <p className="text-lg text-white">{movie.overview}</p>
              <p className="text-white">Release Date: {movie.release_date}</p>
              <p className="text-white">Popularity: {movie.popularity}</p>
              <p className="text-white">
                Language: ({movie.original_language})
              </p>
            </div>
            <div className="flex items-center space-x-4 my-4">
              <button className="bg-red-500 hover:bg-red-800 text-white px-10 py-2 flex items-center">
                <CiPlay1 className="mr-2" />
                Play
              </button>
              <button className="bg-blue-500 hover:bg-blue-800 text-white px-10 py-2 flex items-center">
                <IoMdDownload />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
