import React from "react";

function ViewPropertys({ type, value, handleDeletePropertys }) {
  return (
    <div className="text-white flex items-center justify-center bg-violet-900 p-2 pt-4 relative  ">
      <span className="block border p-2 ">Type: {type}</span>
      <span className="block bg-violet-500 p-2 m-2">Value: {value}</span>
      <span
        onClick={() => handleDeletePropertys(type)}
        className="absolute text-red-600 right-1 top-0 font-bold cursor-pointer"
      >
        X
      </span>
    </div>
  );
}

export default ViewPropertys;
