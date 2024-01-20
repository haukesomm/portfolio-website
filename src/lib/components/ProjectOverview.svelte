<script lang="ts">
    import ProjectCard from "../components/ProjectCard.svelte";
    import type {Repository} from "$lib/model/Repository";

    export let repos: Repository[];
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each repos as repo}
        <ProjectCard
            repo={repo}
        />
    {/each}
</div>