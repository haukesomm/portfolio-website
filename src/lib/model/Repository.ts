import type {ProgrammingLanguage} from "$lib/model/ProgrammingLanguage";
import type {RepositoryOwner} from "$lib/model/RepositoryOwner";

export type Repository = {
    name: string,
    description: string,
    stargazerCount: number,
    url: string,
    homepageUrl: string,
    primaryLanguage: ProgrammingLanguage,
    owner: RepositoryOwner
}