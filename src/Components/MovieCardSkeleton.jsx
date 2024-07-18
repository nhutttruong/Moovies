import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieCardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((__, i) => (
      <div className="flex flex-col" key={i}>
        <div className="w-[300px]">
          <Skeleton height={360} />
        </div>
        <div>
          <Skeleton height={40} count={2} />
        </div>
      </div>
    ));
};

export default MovieCardSkeleton;
