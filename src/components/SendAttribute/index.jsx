import React, { useState } from "react";

function SendAttribute({
  placeHolder,
  handleCreateNFT,
  createNFT,
  name,
  error = {},
}) {
  return (
    <>
      <input
        type="text"
        id={name}
        name={name}
        value={createNFT[name]}
        className={`placeholder:text-slate-500 bg-transparent my-5 border outline-none ${
          error[name] && "border-red-500"
        } border-gray-300 text-white text-sm rounded-lg   block w-full p-2.5 `}
        placeholder={placeHolder}
        onChange={(e) => handleCreateNFT(e, createNFT)}
      />
      {error[name] && (
        <span className="text-xs block text-red-500 flex gap-2">
          <i className="bi bi-exclamation-triangle-fill"></i>
          {error[name]}
        </span>
      )}
    </>
  );
}

export default SendAttribute;
