import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import { CiStar } from "react-icons/ci";
import Pagination from "../pagintion/Pagination";
const MovieGenre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeNavBar();
    }
  };

  // movies fecting
  const getAllMovies = () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGI0MGRhOGVlN2ZjNzJhNWZlODZlY2Q4YjA2NjYwOCIsIm5iZiI6MTcyODE1MzA0Mi4wMzgxNjQsInN1YiI6IjY3MDA3YmY1NzgzMGMxMzAxZTdjZTFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obuIFPOJ3sJ4nGM_BHMqXNbYorNDnKqFe49TlXIcTaQ",
      },
    };

    setLoading(true); // Start loading
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("error:" + err);
        setLoading(false); // Stop loading on error
      });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const handleImageClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-full rounded flex">
        <input
          className="border-b border-gray-300 py-1 px-10   focus:border-b-2 focus:border-blue-700 transition-colors w-full  text-black
            md:text-black focus:outline-none peer bg-inherit  "
          placeholder="Search Movie here "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className="  bg-slate-800 py-2 px-3 border border-transparent text-center text-sm  transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 //////// rounded-r text-white cursor-pointer   items-center flex"
        >
          <CiSearch />
        </button>
      </div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:justify-between w-full mt-4">
          <div className="">
            <form className="grid grid-cols-2 md:grid-cols-4 px-1  text-center items-center md:px-2 md:space-x-1">
              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Browse
                </label>
                <select className="text-center text-xs">
                  <option>All</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Genre
                </label>
                <select className="text-center text-xs">
                  <option>All</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Year
                </label>
                <select className="text-center text-xs">
                  <option>All</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Language
                </label>
                <select className="text-center text-xs">
                  <option>All</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Sort By
                </label>
                <select className="text-center text-xs">
                  <option>Release Date</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className=" bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 w-[150px]">
                  Sort
                </label>
                <select className="text-center text-xs">
                  <option>Decending </option>
                </select>
              </div>
            </form>
            {/* TABS BELOW  */}{" "}
          </div>
          <div className="font-bold mt-4">
            <div className="">
              <div className="flex items-center flex-col">
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {movies.map((movie) => (
                      <div key={movie.id}>
                        <div className="cursor-pointer">
                          <img
                            onClick={() => handleImageClick(movie.id)}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className=" rounded-b-none rounded-xl cursor-pointer md:w-[250px] h-[300px]"
                          />
                        </div>
                        <div className="  border p-2 md:w-[250px] shoadow-xl">
                          <p className="text-xs text-gray-400">
                            {movie.release_date
                              ? movie.release_date.substring(0, 4)
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*  for next button and ore prev */}
      <div className=" my-5">
        <Pagination />
      </div>
    </div>
  );
};

export default MovieGenre;
