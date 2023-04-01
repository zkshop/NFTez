import { client } from "../../teztok";

type Attribute = {
  name: string;
  value: string;
}

type AttributeCounted = {
  value: string;
  count: number;
}

type CollectionAttributes = {
  [attributeName: string]: Array<AttributeCounted>;
}

export const getCollectionAttributes = async (contractAddress: string) => {
  // retrieve all attributes for each tokens
  const nfts = await client.get.getCollectionAttributes({ contractAddress });
  const attributesTable: CollectionAttributes = {};

  // count attributes
  nfts.tokens.forEach((nft) => {
    nft.attributes?.forEach((attribute: Attribute) => {
      const key = attribute.name;
      const value = attribute.value;

      if (attributesTable[key] === undefined) {
        // the attribute category doesn't exist ; we will create it now
        attributesTable[key] = [{value, count: 1}];
      } else {
        const attributeIndex = attributesTable[key].findIndex((elem) =>  elem.value === value);

        if (attributeIndex === -1) {
          // the attribute value doesn't exist ; we will add it now
          attributesTable[key].push({value, count: 1});
        } else {
          // we increment the attribute value count
          attributesTable[key].at(attributeIndex)!.count += 1;
        }
      }
    })
  })

  return attributesTable;
};
