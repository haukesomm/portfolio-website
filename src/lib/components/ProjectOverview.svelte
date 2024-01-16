<script>
    import {programmingLanguages} from "$lib/model/programmingLanguages.js";
    import {featuredProjects} from "$lib/model/featuredProjects.js";
    import ProjectCard from "../components/ProjectCard.svelte";
    import PillButton from "../components/PillButton.svelte";
    import { ArrowTopRightOnSquare } from "svelte-heros-v2";
</script>

<div class="-m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each featuredProjects as project}
        <ProjectCard
            title={project.title}
            language={programmingLanguages[project.language]}
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