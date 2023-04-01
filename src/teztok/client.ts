import { GraphQLClient } from "graphql-request";

const TEZTOK_ENDPOINT = "https://api.teztok.com/v1/graphql";

export const client = new GraphQLClient(TEZTOK_ENDPOINT);
