import React, { useEffect, useState } from "react";
import Alltours from "../components/Alltours";

import Search from "../components/Search";
import tourdata from "../assets/data/tours";
import Tourcard from "../components/Tourcard";
import Newsletter from "../components/Newsletter";
import useFetch from "../components/fetch";
import { BASE_URL } from "../App";

const Tours = () => {
  const [page, setpage] = useState(0);
  const [count, setcount] = useState(0);
  const { datas, loading, errors } = useFetch(
    `${BASE_URL}/place/gettour?page=${page}`
  );
  const { datas: counts } = useFetch(`${BASE_URL}/place/featured/estimate`);
  useEffect(() => {
    const p = Math.ceil(counts / 8);
    setcount(p);
  }, [page, counts, datas]);

  return (
    <div>
      <Alltours title={"All tours"} />
      <Search />
      {loading && (
        <h className="text-4xl flex items-center justify-center text-sky-400 m-4  ">
          ...Loading... Tours...
        </h>
      )}
      {!loading && (
        <div className="  flex flex-wrap items-center justify-center gap-3 mt-4 gap-y-2  mb-4 ">
          {datas?.map((tour, index) => (
            <Tourcard key={tour._id} tour={tour} />
          ))}
        </div>
      )}
      <div className="gap-3 flex items-center justify-center rounded-full  ">
        {[...Array(count).keys()].map((num, index) => (
          <span
            key={index}
            className={
              num === page
                ? "bg-sky-400  flex rounded-full  p-0 items-center justify-center cursor-pointer shadow-2xl w-[2rem] h-[2rem]"
                : "cursor-pointer"
            }
            onClick={() => setpage(num)}
          >
            {num + 1}
          </span>
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export default Tours;
