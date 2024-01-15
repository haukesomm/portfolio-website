<script>
    import {skills} from "$lib/skills.js";
</script>

<div class="flex flex-row flex-wrap gap-3">
    {#each skills as skill}
        <div class="px-2 py-1 border dark:border-gray-700 rounded-full">
            {skill}
        </div>
    {/each}
</div>