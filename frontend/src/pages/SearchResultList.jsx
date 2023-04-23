import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tourcard from "../components/Tourcard";
import Newsletter from "../components/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const [datas] = useState(location.state);
  console.log(datas);
  return (
    <div className="text-black ml-5 mt-2">
      {datas.length === 0 ? (
        <h className="flex items-center justify-center text-sky-400 text-4xl">
          No result found
        </h>
      ) : (
        <div className="flex flex-wrap">
          {datas.map((tour) => (
            <Tourcard key={tour._id} tour={tour} />
          ))}
        </div>
      )}
      <Newsletter />
    </div>
  );
};

export default SearchResultList;
