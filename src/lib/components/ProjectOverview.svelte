<script>
    import ProjectCard from "./ProjectCard.svelte";
    import PillButton from "./PillButton.svelte";
    import { ArrowTopRightOnSquare } from "svelte-heros-v2";

    export let projects;
</script>

<div class="-m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each projects as project}
        <ProjectCard
            title={project.title}
            language={project.programming_language}
            svg={project.svg}
        >
            <div class="space-y-4">
                <p>
                    {project.description}
                </p>
                {#if project.app_link}
                    <PillButton
                        title={project.app_label}
                        href={project.app_link}
                        svg={ArrowTopRightOnSquare}
                    />
                {/if}
                <PillButton
                        title={project.repo_label}
                        href={project.repo_link}
                        svg={ArrowTopRightOnSquare}
                    />
            </div>
        </ProjectCard>
    {/each}
</div>