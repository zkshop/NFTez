import { client } from "../../teztok";

export const getWalletNFTs = async (walletAddress: string) => {
  return await client.get.getWalletNFTs({ walletAddress });
};
