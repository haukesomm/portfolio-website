import {gql} from 'graphql-request'
import GetFeaturedRepositories from '$lib/githubapi/GetFeaturedRepositories.graphql?raw'
import {getGithubApiGraphQlClient} from "$lib/githubapi/Client";
import type {Repository} from "$lib/model/Repository";

type FeaturedRepositoriesResponse = {
    user: {
        pinnedItems: {
            nodes: Repository[]
        }
    }
}

type FeaturedRepositories = {
    repositories: Repository[]
}

export async function load(): Promise<FeaturedRepositories> {
    const client = getGithubApiGraphQlClient();
    const query = gql`${GetFeaturedRepositories}`;
    const result = await client.request<FeaturedRepositoriesResponse>(query, {
        username: "haukesomm"
    });
    return { repositories: result.user.pinnedItems.nodes };
}