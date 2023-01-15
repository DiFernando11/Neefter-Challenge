export const uploadImage = async (e, stateLoading, setCreateNFT) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "Images");
  stateLoading(true);
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/drkv8ebxx/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const file = await res.json();
  setCreateNFT((prev) => ({ ...prev, image: file.secure_url }));
  stateLoading(false);
};
export const validateInputData = (input) => {
  const empty = "The input cannot be empty";
  const maxCharacter = (size) => `Maximum number of characters allowed:${size}`;
  let err = {};
  if (!input.name.length) err.name = empty;
  else if (input.name.length > 60) err.name = maxCharacter(60);
  if (!input.description.length) err.description = empty;
  else if (input.description.length > 120) err.description = maxCharacter(120);
  return err;
};
