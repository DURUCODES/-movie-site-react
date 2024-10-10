import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Search = ({ closeNavBar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeNavBar();
    }
  };
  return (
    <div className=" w-full rounded flex">
      <input
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors  text-white  md:text-black focus:outline-none peer bg-inherit  "
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
        className="bg-gradient-to-tr from-cyan-600 to-cyan-400 px-4 py-2 rounded-r text-white cursor-pointer  items-center flex"
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
