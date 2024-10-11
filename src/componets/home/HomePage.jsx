import React, { useEffect } from "react";
import Popular from "../popular-movie/Popular";

import { useNavigate } from "react-router";
import Trending from "../trendind/Trending";
import Tv from "../tv/Tv";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-2 items-center justify-center">
        <div className="flex flex-col items-center ">
          <Trending />
          <Popular />
          <Tv />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
