import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import { HttpLink } from "apollo-link-http";

const restLink = new RestLink({
    endpoints: {
        openExchangeRate: "https://open.exchangerate-api.com/v6/",
    },
});

const httpLink = new HttpLink({
    uri: "https://notable-leopard-55.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "1gUNJM1ECJ1hgkO5Po4ZqIhilM1h5RDFAxjIuKAfgn75TBDxqUKRp92YYuvoGtec",
    },
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([restLink, httpLink]),
});