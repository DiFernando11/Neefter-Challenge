import React, { useState } from "react";
import Sppiner from "../Spinner";
import { uploadImage } from "../utils";

function ImageNFT({ setCreateNFT, imageNFT }) {
  const [loading, setLoading] = useState(false);
  const handleChangeImage = (e) => {
    uploadImage(e, setLoading, setCreateNFT);
  };
  const handleDelteImageCurrent = () => {
    setCreateNFT((prev) => ({ ...prev, image: "" }));
  };
  return (
    <section className="text-white">
      <h2 className="font-bold text-xl mb-3">Upload Files</h2>
      <span className="text-sm block mb-2">
        Upload all files you want to mint
      </span>
      <div className="flex items-center justify-center w-full mb-5 relative ">
        {loading ? (
          <Sppiner />
        ) : imageNFT ? (
          <>
            <img
              src={imageNFT}
              alt="image nft"
              className="w-full h-56 object-cover"
            />
            <span
              onClick={handleDelteImageCurrent}
              className="absolute text-red-600 right-1 top-1 font-bold cursor-pointer text-3xl"
            >
              X
            </span>
          </>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-[#680d8430] "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 ">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleChangeImage}
            />
          </label>
        )}
      </div>
      <div className="text-xs leading-6 mb-10">
        <p>Max. 50 MB per individual file.</p>
        <p>Upload up to 6 files.</p>
        <p>We support Image audio and video files.</p>
      </div>
    </section>
  );
}

export default ImageNFT;
