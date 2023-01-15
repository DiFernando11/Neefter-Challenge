import CreateProperty from "../CreateProperty";
import SendAttribute from "../SendAttribute";

function DetailsToken({ createNFT, handleCreateNFT, setCreateNFT, error }) {
  return (
    <section className="mt-5 text-white">
      <h3 className="text-xl">Token details</h3>
      <p className="text-sm mt-2">
        The 'Display name' and 'Description' will be shown in wallets or on
        marketplaces, where the NFT is displayed. This information is also
        stores on the blockchain
      </p>
      <SendAttribute
        placeHolder={"Display name {max.60}"}
        createNFT={createNFT}
        name={"name"}
        handleCreateNFT={handleCreateNFT}
        error={error}
      />
      <SendAttribute
        placeHolder={"Description {max.180}"}
        createNFT={createNFT}
        name={"description"}
        handleCreateNFT={handleCreateNFT}
        error={error}
      />
      <CreateProperty setCreateNFT={setCreateNFT} />
    </section>
  );
}

export default DetailsToken;
