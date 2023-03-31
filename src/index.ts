import { TezosToolkit } from "@taquito/taquito";
import axios from "axios";

// Fonction pour récupérer les NFTs d'un wallet
const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

const tzkt = axios.create({
  baseURL: "https://api.tzkt.io/v1/",
});

const getWalletNFTs = async () => {
  const Tezos = new TezosToolkit("https://rpc.tzbeta.net/");

  const walletData = tzkt.get(
    `tokens?token.standard=fa2&account=${WALLET_ADDRESS}`
  );

  return walletData;
};

const verifyOwnership = async (walletAddress: string, contractAddress: string) => {
  const Tezos = new TezosToolkit("https://rpc.tzbeta.net/");
  const lastBlock = (await Tezos.rpc.getBlock()).header.level;
  
  const endpoint = `tokens/historical_balances/${lastBlock}?account=${walletAddress}&token.standard=fa2&token.contract=${contractAddress}`;
  const walletData = tzkt.get(endpoint);

  return walletData;
};

getWalletNFTs()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));

verifyOwnership(WALLET_ADDRESS, "KT1NVvPsNDChrLRH5K2cy6Sc9r1uuUwdiZQd")
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));
