import sdk from ".";

const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

sdk
  .getCollectionAttributes("KT1ADeWwH7VQyhiiqF8PnxczEodjWjPdNGaD")
  .then((ret) => console.dir(ret, {depth: null}));
