import { client } from "../../teztok";

export const verifyTokenOwnership = async (
  tokenId: string,
  walletAddress: string,
  contractAddress: string
) => {
  const data = await client.get.verifyTokenOwnership({
    contractAddress,
    walletAddress,
    tokenId,
  });

  if (data.holdings.length) return true;
  return false;
};
