import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../loading/Loading";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Popular = () => {
  const navigate = useNavigate();
  const [popularMovie, setPopularMovie] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [hideBtn, setHideBtn] = useState(false);
  const [hiseSeemore, setHideSeemore] = useState(false);

  const getMoviePopularMovies = () => {
    setLoading(true); // Start loading
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=fdb40da8ee7fc72a5fe86ecd8b066608"
    )
      .then((res) => res.json())
      .then((json) => {
        setPopularMovie(json.results);
        setLoading(false); // Stop loading
      })
      .catch(() => {
        setLoading(false); // Stop loading on error
      });
  };

  useEffect(() => {
    getMoviePopularMovies();
  }, []);
  const seeMoreBtn = () => {
    setHideSeemore(true); // Hide see more text
    setHideBtn(true); // Show the button
    navigate("/popular"); // Navigate to popular page
  };

  const seeMoreHandle = () => {
    setShowAll(true); // Show all movies
    setHideBtn(true); // Hide the button after clicking it
  };
  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="">
      <div className="flex  items-center justify-between">
        <h1 className="text-2xl font-bold mt-4 mb-2">Popular Movies</h1>

        {!hiseSeemore && !loading && (
          <p
            className="cursor-pointer text-sm text-gray-700 hover:text-red-400"
            onClick={seeMoreBtn}
          >
            see more
          </p>
        )}
      </div>
      <div className="flex items-center flex-col">
        <div className="flex flex-col justify-center">
          {loading ? (
            <div className="text-lg font-semibold">
              <Loading />
            </div> // Loading text
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularMovie
                .slice(0, showAll ? popularMovie.length : 8)
                .map((movie) => (
                  <div key={movie.id}>
                    <div className="cursor-pointer">
                      <img
                        onClick={() => handleImageClick(movie.id)}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg  rounded-b-none cursor-pointer md:w-[250px] h-[300px]"
                      />
                    </div>
                    <div className="  border p-2 md:w-[250px] shoadow-xl">
                      <p className="text-xs text-gray-400">
                        {movie.release_date
                          ? movie.release_date.substring(0, 4)
                          : movie.first_air_date
                          ? movie.first_air_date.substring(0, 4)
                          : ""}
                      </p>
                      <h1 className="font-bold my-2 text-black text-1xl line-clamp-1">
                        {movie.title || movie.name}
                      </h1>
                      <p className="flex text-[9px] items-center ">
                        <CiStar className="mr-2 hover:text-red-500" />
                        <span className="text-[9px] mr-1">Rating :</span>
                        {movie.vote_average
                          ? String(movie.vote_average)[0]
                          : ""}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="my-4">
            {hideBtn && (
              <button
                onClick={seeMoreHandle}
                className="dark:bg-gray-900 text-white w-full p-3 font-bold text-2xl"
                disabled={loading}
              >
                See more Popular
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
