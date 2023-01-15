import React, { useState } from "react";
import {
  handleAlertError,
  handleAlertLoading,
  handleAlertSuccess,
} from "../../alerts";
import DetailsToken from "../DetailsToken";
import ImageNFT from "../ImageNFT";
import { validateInputData } from "../utils";
import ViewPropertys from "../ViewPropertys";

function FormCreateNFT() {
  const [createNFT, setCreateNFT] = useState({
    name: "",
    image: "",
    description: "",
    attributes: [],
  });
  const messageInitialError = "The input cannot be empty";
  const [error, setError] = useState({
    name: messageInitialError,
    description: messageInitialError,
  });

  const handleSetDataCreateNFT = (e, createNFTs) => {
    setCreateNFT({ ...createNFT, [e.target.name]: e.target.value });
    setError(
      validateInputData({
        ...createNFTs,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleDeletePropertys = (type) => {
    const deleteProperty = createNFT.attributes.filter(
      (attr) => attr.trait_type !== type
    );
    setCreateNFT({ ...createNFT, attributes: deleteProperty });
  };

  const handleSubmitMintNFT = (e) => {
    e.preventDefault();
    handleAlertLoading();
    const bodyRequest = {
      metadata: createNFT,

      recipient: "email:diegoapolo2011@gmail.com:solana",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-secret": "sk_test.TDK1vsSp.yUoZ46DUIQPjjbqVBE3hzzACuFmBUNhg",
        "x-project-id": "cb276ff9-fbe9-4801-84f9-5116b90b5118",
      },
      body: JSON.stringify(bodyRequest),
    };
    try {
      fetch(
        "https://staging.crossmint.com/api/2022-06-09/collections/default-solana/nfts",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          handleAlertSuccess(data);
        });
    } catch (error) {
      handleAlertError();
    }

    setCreateNFT({ name: "", image: "", description: "", attributes: [] });
  };
  return (
    <main className="sm:w-9/12 w-11/12 m-auto py-5 ">
      <form action="" onSubmit={handleSubmitMintNFT}>
        <h1 className="text-white sm:text-3xl text-2xl text-center font-bold mb-6">
          Create A single NFT
        </h1>
        <ImageNFT setCreateNFT={setCreateNFT} imageNFT={createNFT.image} />
        <hr className="text-white" />
        <DetailsToken
          handleCreateNFT={handleSetDataCreateNFT}
          createNFT={createNFT}
          setCreateNFT={setCreateNFT}
          error={error}
        />
        <section className="cardGridColumn">
          {createNFT.attributes.length
            ? createNFT.attributes.map((attr) => (
                <ViewPropertys
                  key={attr.trait_type}
                  type={attr.trait_type}
                  value={attr.value}
                  handleDeletePropertys={handleDeletePropertys}
                />
              ))
            : null}
        </section>
        <input
          type="submit"
          className={` text-white p-2 w-32 block m-auto ${
            error.name || error.description || !createNFT.image
              ? "pointer-events-none cursor-not-allowed border border-red-500"
              : "bg-violet-500"
          } cursor-pointer`}
        />
      </form>
    </main>
  );
}

export default FormCreateNFT;
