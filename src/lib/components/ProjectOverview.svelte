<script lang="ts">
    import ProjectCard from "../components/ProjectCard.svelte";
    import type {UserWithPinnedRepos} from "$lib/model/UserWithPinnedRepos";

    export let userWithPinnedRepos: UserWithPinnedRepos;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each userWithPinnedRepos.pinnedItems.nodes as repo}
        <ProjectCard
            username={userWithPinnedRepos.login}
            {repo}
        />
    {/each}
</div>