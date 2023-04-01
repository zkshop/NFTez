import { client } from "../../teztok";
import { replaceIpfsUrls } from "../../utils";
import { config } from "../config";

export const getNFTMetadata = async (
  contractAddress: string,
  tokenId: string
) => {
  const data = await client.get.getNFTMetadata({ contractAddress, tokenId });

  return replaceIpfsUrls(data, config.ipfsNode);
};
