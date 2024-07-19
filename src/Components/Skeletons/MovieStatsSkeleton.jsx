import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieStatsSkeleton = () => {
  return (
    <div className="w-[750px]">
      <div className="flex">
        <div className="mr-[10px]">
          <Skeleton width={270} height={400} />
        </div>
        <div>
          <div>
            <Skeleton width={470} height={50} />
          </div>
          <Skeleton width={470} height={40} count={8} />
        </div>
      </div>
      <div>
        <Skeleton height={100} />
      </div>
    </div>
  );
};

export default MovieStatsSkeleton;
