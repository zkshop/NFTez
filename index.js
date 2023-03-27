const { TezosToolkit } = require("@taquito/taquito");
const axios = require("axios");


// Fonction pour récupérer les NFTs d'un wallet
const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

const getWalletNFTs = async () => {
  const Tezos = new TezosToolkit("https://rpc.tzbeta.net/");
  const lastBlock = (await Tezos.rpc.getBlock()).header.level;
  console.log(lastBlock);
  const walletData = axios.get(
    `https://api.tzkt.io/v1/tokens/historical_balances/${lastBlock}?token.standard=fa2&account=${WALLET_ADDRESS}`
  );

  return walletData;
};

getWalletNFTs()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));
