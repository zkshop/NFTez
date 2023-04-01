import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

const TEZTOK_ENDPOINT = "https://api.teztok.com/v1/graphql";

export const gqlClient = new GraphQLClient(TEZTOK_ENDPOINT);

export const get = getSdk(gqlClient);

export const client = {
  get: getSdk(gqlClient),
};
