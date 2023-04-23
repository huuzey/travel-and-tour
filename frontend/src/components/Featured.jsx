import React, { useState } from "react";
import Tourcard from "./Tourcard";
import useFetch from "./fetch";
import { BASE_URL } from "../App";

const Featured = () => {
  const [fetched, setfetched] = useState([]);
  const { datas, loading, errors } = useFetch(`${BASE_URL}/place/gettour`);

  return (
    <div className="  flex flex-wrap items-center justify-center gap-3 mt-4 gap-y-2  mb-4 ">
      {datas?.map((tour, i) => {
        return <Tourcard tour={tour} key={i} />;
      })}
    </div>
  );
};

export default Featured;
