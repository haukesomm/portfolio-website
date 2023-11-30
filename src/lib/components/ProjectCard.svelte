<script>
    import { CodeBracket, CodeBracketSquare } from 'svelte-heros-v2';

    /**
     * Title of the project.
     * 
     * @type {string}
     */
    export let title;

    /**
     * Programming language used by the project.
     * 
     * @type {import("$lib/model/ProgrammingLanguages".ProgrammingLanguage)}
     */
    export let language;

    /**
     * Target platform of the project.
     * 
     * @type {import("$lib/model/ProjectPlatform").ProjectPlatform}
     */
    export let platform;
</script>

<div class="w-full h-fit p-4 flex flex-col gap-4 rounded-lg border dark:border-gray-700 bg-background shadow-sm transition duration-200 hover:scale-105">
    <div class="flex flex-row justify-between items-center gap-4">
        <p class="font-semibold">{title}</p>
        <CodeBracketSquare class="w-6 h-6"/>
    </div>
    <div>
        <slot></slot>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <div class="flex flex-row gap-2 items-center">
            <div class={`w-3 h-3 rounded-full ${language.colorClasses}`}></div>
            <span class="text-sm">{language.name}</span>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <svelte:component class="w-5 h-5" this={platform.svg}/>
            <span class="text-sm">{platform.name}</span>
        </div>
    </div>
</div>