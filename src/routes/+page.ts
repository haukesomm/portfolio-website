import {gql} from 'graphql-request'
import GetFeaturedRepositories from '$lib/githubapi/GetFeaturedRepositories.graphql?raw'
import {getGithubApiGraphQlClient} from "$lib/githubapi/Client";
import type {UserWithPinnedRepos} from "$lib/model/UserWithPinnedRepos";

type FeaturedRepositoriesResponse = {
    user: UserWithPinnedRepos
}

export async function load(): Promise<UserWithPinnedRepos> {
    const client = getGithubApiGraphQlClient();
    const query = gql`${GetFeaturedRepositories}`;
    const result = await client.request<FeaturedRepositoriesResponse>(query, {
        username: "haukesomm"
    });
    return result.user;
}