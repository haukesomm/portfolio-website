<script lang="ts">
    import Headline from "$lib/components/Headline.svelte";

    export let title: string;

    export let subtitle: string | undefined = undefined;
</script>

<div class="space-y-6">
    <div>
        <Headline text="{title}"/>
        {#if subtitle}
            <p class="text-gray-600 dark:text-gray-400">{subtitle}</p>
        {/if}
    </div>
    <slot/>
</div>