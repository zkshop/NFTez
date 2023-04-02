import sdk from ".";

const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

sdk
  .getWalletNFTs(WALLET_ADDRESS)
  .then((ret) => console.dir(ret, {depth: null}));
