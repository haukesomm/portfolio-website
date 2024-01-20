import type {ProgrammingLanguage} from "$lib/model/ProgrammingLanguage";
import type {RepositoryOwner} from "$lib/model/RepositoryOwner";
import type {Collaborator} from "$lib/model/Collaborator";

export type Repository = {
    name: string,
    description: string,
    stargazerCount: number,
    url: string,
    homepageUrl: string,
    primaryLanguage: ProgrammingLanguage,
    owner: RepositoryOwner,
    collaborators: {
        nodes: Collaborator[]
    }
}

export const repositoryRoleForUsername = (username: string, repository: Repository): string | undefined => {
    if (repository.owner.login === username) {
        return "Owner";
    }
    else if (repository.collaborators.nodes.find(collaborator => collaborator.login === username)) {
        return "Collaborator";
    }
    return undefined;
}