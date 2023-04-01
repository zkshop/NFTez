import { client } from "./teztok";

const getWalletNFTs = async (walletAddress: string) => {
  return await client.get.getNFTs({ walletAddress });
};

const verifyOwnership = async (
  walletAddress: string,
  contractAddress: string
) => {
  const data = await client.get.verifyOwnership({
    walletAddress,
    contractAddress,
  });

  if (data.holdings.length) return true;
  return false;
};

const getNFTCollection = async (contractAddress: string) => {
  return await client.get.getNFTCollection({ contractAddress });
};

export default {
  getWalletNFTs,
  verifyOwnership,
  getNFTCollection,
};
