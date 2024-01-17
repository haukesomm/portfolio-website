<script lang="ts">
    import type {SvelteComponent} from "svelte";

    export let title: string;

    export let href: string;

    export let svg: new (...args: any[]) => SvelteComponent;
</script>

<a 
    class="px-2 py-1 flex flex-row gap-2 justify-center items-center border dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-800 text-sm"
    {href}
    target="_blank"
>
    {title}
    <svelte:component this={svg} class="w-4 h-4"/>
</a>