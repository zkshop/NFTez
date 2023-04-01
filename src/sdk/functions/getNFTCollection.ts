import { client } from "../../teztok";

export const getNFTCollection = async (contractAddress: string) => {
  return await client.get.getNFTCollection({ contractAddress });
};
