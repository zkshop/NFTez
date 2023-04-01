import { TezosToolkit } from "@taquito/taquito";
import axios from "axios";
import { client } from "./teztok";
import {
  getSdk,
  GetWalletTokensDocument,
  GetWalletTokensQuery,
  GetWalletTokensQueryVariables,
} from "./teztok/generated";

const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

const tzkt = axios.create({
  baseURL: "https://api.tzkt.io/v1/",
});

const getWalletNFTs = async (walletAddress: string) => {
  const walletData = getSdk(client).getNFTs({ walletAddress });

  return walletData;
};

const verifyOwnership = async (
  walletAddress: string,
  contractAddress: string
) => {
  const Tezos = new TezosToolkit("https://rpc.tzbeta.net/");
  const lastBlock = (await Tezos.rpc.getBlock()).header.level;

  const endpoint = `tokens/historical_balances/${lastBlock}?account=${walletAddress}&token.standard=fa2&token.contract=${contractAddress}`;
  const walletData = tzkt.get(endpoint);

  return walletData;
};

getWalletNFTs(WALLET_ADDRESS)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));

verifyOwnership(WALLET_ADDRESS, "KT1NVvPsNDChrLRH5K2cy6Sc9r1uuUwdiZQd")
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));
