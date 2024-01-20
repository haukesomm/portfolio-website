import type {Repository} from "$lib/model/Repository";

export type UserWithPinnedRepos = {
    login: string,
    pinnedItems: {
        nodes: Repository[]
    }
}