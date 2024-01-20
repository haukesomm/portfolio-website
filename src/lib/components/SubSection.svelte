<script lang="ts">
    export let title: string;

    export let subtitle: string | undefined = undefined;
</script>

<div class="space-y-6">
    <div>
        <h2 class="text-xl font-semibold">{title}</h2>
        {#if subtitle}
            <p class="text-gray-600 dark:text-gray-400">{subtitle}</p>
        {/if}
    </div>
    <slot/>
</div>