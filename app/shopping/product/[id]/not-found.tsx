import React from "react";

type Props = {};

const notfound = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl font-bold">Whoops...</h1>
      <h2 className="font-extralight animate-pulse">
        Its like the product could not be found!
      </h2>
    </div>
  );
};

export default notfound;
