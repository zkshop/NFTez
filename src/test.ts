import sdk from ".";

const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";

sdk
  .getNFTMetadata("KT1NVvPsNDChrLRH5K2cy6Sc9r1uuUwdiZQd", "8017")
  .then(console.log);
