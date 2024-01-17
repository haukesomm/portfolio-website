<script lang="ts">
    import {skills} from "../model/skills";
</script>

<div class="flex flex-row flex-wrap gap-3">
    {#each skills as skill}
        <div class="px-4 py-1 flex flex-row gap-2 items-center border dark:border-gray-700 rounded-full bg-background">
            {#if skill.svg}
                <div class="w-4 h-4" style="color: {skill.color}">
                    {@html skill.svg}
                </div>
            {/if}
            <span>{skill.title}</span>
        </div>
    {/each}
</div>