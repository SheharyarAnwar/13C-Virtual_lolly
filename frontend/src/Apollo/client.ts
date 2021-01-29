import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"
const link = new HttpLink({
  uri:
    "https://cg2kx6rvqvdwva7lxiquzq3tsu.appsync-api.ap-south-1.amazonaws.com/graphql",
  headers: {
    "x-api-key": "da2-b3rlrxrtgvavrg3ggogb564paa",
  },
  fetch,
})
export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
}
