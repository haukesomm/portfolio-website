<script>
    import {CodeBracketSquare, LightBulb, Star} from 'svelte-heros-v2';

    /**
     * Title of the project.
     * 
     * @type {string}
     */
    export let title;

    /**
     * Programming language used by the project.
     * 
     * @type {ProgrammingLanguage}
     */
    export let language;

    /**
     * @type {import('svelte').SvelteComponent}
     */
    export let svg = null;
</script>

<div class="w-full h-fit p-4 flex flex-col gap-4 rounded-lg border dark:border-gray-700 bg-background shadow-sm transition duration-200 hover:scale-105">
    <div class="flex flex-row items-center gap-2">
        {#if svg != null}
            <div class="w-6 h-6">
                {@html svg}
            </div>
        {/if}
        <p class="font-semibold">{title}</p>
    </div>
    <div>
        <slot></slot>
    </div>
    <div class="flex flex-row gap-2 items-center">
        <div class={`w-3 h-3 rounded-full`} style="background: {language.color};"/>
        <span class="text-sm">{language.name}</span>
    </div>
</div>