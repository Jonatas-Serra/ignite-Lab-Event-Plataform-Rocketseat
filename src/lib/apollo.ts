import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5eoj8361cgp01uo3rwz38vf/master',
    cache: new InMemoryCache()
})
