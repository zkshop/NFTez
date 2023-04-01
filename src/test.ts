import sdk from '.';

const WALLET_ADDRESS = "tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq";


sdk.getNFTCollection('KT1NVvPsNDChrLRH5K2cy6Sc9r1uuUwdiZQd').then(console.log);
sdk.getWalletNFTs('tz1eQzGZXy36xx6xDT1Xp6dUdHS2dXowKdCq').then(console.log);