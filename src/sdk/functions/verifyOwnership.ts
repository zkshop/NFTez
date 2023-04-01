import { client } from "../../teztok";

export const verifyOwnership = async (
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
