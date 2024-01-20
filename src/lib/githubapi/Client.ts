import {GraphQLClient} from "graphql-request";
import {PUBLIC_GITHUB_PAT} from "$env/static/public";

export const getGithubApiGraphQlClient = () => new GraphQLClient("https://api.github.com/graphql", {
    headers: {
        authorization: `Bearer ${PUBLIC_GITHUB_PAT}`
    },
});