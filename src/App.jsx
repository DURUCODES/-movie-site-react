import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveBar from "./componets/navbar/ResponsiveBar";
import HomePage from "./componets/home/HomePage";
import Trending from "./componets/trendind/Trending";
import Footer from "./componets/footer/Footer";
import Popular from "./componets/popular-movie/Popular";
import MovieDetails from "./componets/detailpage/MovieDetails";
import SearchResults from "./componets/search/SearchResults";

import Tv from "./componets/tv/Tv";
import MovieGenre from "./componets/genre/MovieGenre";

function App() {
  return (
    <Router>
      <div>
        <ResponsiveBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/browsemovies" element={<MovieGenre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
