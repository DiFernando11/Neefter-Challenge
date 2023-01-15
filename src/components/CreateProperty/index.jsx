import React, { useState } from "react";
import { handleAlertInfo } from "../../alerts";
import SendAttribute from "../SendAttribute";
import { validateInputData } from "../utils";

function CreateProperty({ setCreateNFT }) {
  const [valueProperty, setValueProperty] = useState({
    trait_type: "",
    value: "",
  });
  const [errorProperty, setErrorProperty] = useState(true);

  const { trait_type, value } = valueProperty;
  const handleChangeProperty = (e, createNFTs) => {
    setValueProperty({ ...valueProperty, [e.target.name]: e.target.value });
    handleChangeValidateProperty({
      ...createNFTs,
      [e.target.name]: e.target.value,
    });
  };
  const handleNewProperty = () => {
    setCreateNFT((prev) => {
      if (!prev.attributes.some((attr) => attr.trait_type === trait_type)) {
        setValueProperty({ trait_type: "", value: "" });
        return {
          ...prev,
          attributes: [...prev.attributes, { trait_type, value }],
        };
      } else {
        handleAlertInfo();
        return prev;
      }
    });
  };
  const handleChangeValidateProperty = (input) => {
    if (input.trait_type.length > 50) return setErrorProperty(true);
    if (input.value.length > 50) return setErrorProperty(true);
    else if (input.trait_type.length && input.value.length)
      setErrorProperty(false);
    else setErrorProperty(true);
  };

  return (
    <section className="mt-5">
      <h4>Properties</h4>
      <span className="text-xs" onClick={() => setNewInputProperty(true)}>
        Add a new property
      </span>

      <div className="flex gap-5 items-center">
        <SendAttribute
          placeHolder="new Property {max.50}"
          name="trait_type"
          createNFT={valueProperty}
          handleCreateNFT={handleChangeProperty}
        />
        <SendAttribute
          placeHolder="value of the property {max.50}"
          name="value"
          createNFT={valueProperty}
          handleCreateNFT={handleChangeProperty}
        />
        <i
          className={`bi ${
            errorProperty
              ? "border border-red-500 bg-transparent text-red-500 pointer-events-none cursor-not-allowed"
              : "bg-violet-700"
          } bi-check-lg cursor-pointer rounded-md w-20 h-10 flex items-center justify-center text-2xl`}
          onClick={handleNewProperty}
        ></i>
      </div>
    </section>
  );
}

export default CreateProperty;
