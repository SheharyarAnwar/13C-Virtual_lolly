import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "isomorphic-fetch"
const link = new HttpLink({
  uri:
    "https://57fl2cq4lbbypewc2dyzh27x3y.appsync-api.ap-south-1.amazonaws.com/graphql",
  headers: {
    "x-api-key": "da2-5kbqkohbzfht3prykwqjqnteam",
  },
  fetch,
})
export const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
}
