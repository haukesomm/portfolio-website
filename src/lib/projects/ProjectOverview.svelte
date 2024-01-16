<script>
    import {programming_languages} from "$lib/projects/programming_language.js";
    import ProjectCard from "./ProjectCard.svelte";
    import PillButton from "../components/PillButton.svelte";
    import { ArrowTopRightOnSquare } from "svelte-heros-v2";

    export let projects;
</script>

<div class="-m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each projects as project}
        <ProjectCard
            title={project.title}
            language={programming_languages[project.language]}
            svg={project.svg}
        >
            <div class="space-y-4">
                <p>
                    {project.description}
                </p>
                {#if project.app_link_href}
                    <PillButton
                        title={project.app_link_title}
                        href={project.app_link_href}
                        svg={ArrowTopRightOnSquare}
                    />
                {/if}
                {#if project.github_link}
                    <PillButton
                        title="View on GitHub"
                        href={project.github_link}
                        svg={ArrowTopRightOnSquare}
                    />
                {/if}
            </div>
        </ProjectCard>
    {/each}
</div>