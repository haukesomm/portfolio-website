<script lang="ts">
    import {ArrowTopRightOnSquare, Star, User} from "svelte-heros-v2";
    import PillButton from "$lib/components/PillButton.svelte";
    import type {Repository} from "$lib/model/Repository";

    export let repo: Repository
</script>

<div class="w-full h-fit p-4 flex flex-col gap-4 rounded-xl border dark:border-gray-700 bg-background shadow-sm transition duration-200 hover:scale-105">
    <div class="flex flex-row gap-2 justify-between items-center">
        <p class="font-semibold">{repo.name}</p>
        <div class="px-1 border dark:border-gray-700 rounded-full text-xs">
            <!-- TODO: Find a cleaner way -->
            {#if repo.owner.login === "haukesomm"}
                Owner
            {:else}
                Contributor
            {/if}
        </div>
    </div>

    <p>{repo.description}</p>

    {#if repo.homepageUrl}
        <PillButton
            title="Homepage"
            href={repo.homepageUrl}
            svg={ArrowTopRightOnSquare}
        />
    {/if}

    <PillButton
        title="View on GitHub"
        href={repo.url}
        svg={ArrowTopRightOnSquare}
    />

    <div class="flex flex-row flex-wrap gap-x-4 gap-y-1 items-center">
        <div class="flex flex-row gap-2 items-center">
            <div class="w-3 h-3 rounded-full" style="background: {repo.primaryLanguage.color};"/>
            <span class="text-sm">{repo.primaryLanguage.name}</span>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <Star class="w-4 h-4"/>
            <span class="text-sm">{repo.stargazerCount}</span>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <User class="w-4 h-4"/>
            <a class="text-sm" href={repo.owner.url} target="_blank">{repo.owner.login}</a>
        </div>
    </div>
</div>