<script lang="ts">
    import {skills} from "../model/Skills";
    import VectorIcon from "$lib/components/VectorIcon.svelte";
</script>

<div class="flex flex-row flex-wrap gap-3">
    {#each skills as skill}
        <div class="px-3 py-1 flex flex-row gap-2 items-center border dark:border-gray-700 rounded-full bg-background">
            {#if skill.path}
                <div class="w-4 h-4 currentColor">
                    <VectorIcon path={skill.path} color={skill.color}/>
                </div>
            {/if}
            <span>{skill.title}</span>
        </div>
    {/each}
</div>