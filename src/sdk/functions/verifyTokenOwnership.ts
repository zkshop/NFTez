import { client } from "../../teztok";

export const verifyTokenOwnership = async (
  tokenId: string,
  walletAddress: string,
  contractAddress: string
) => {
  return client.get.verifyTokenOwnership({
    contractAddress,
    walletAddress,
    tokenId,
  });
};
