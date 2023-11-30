<script>
    import ProjectCard from "./ProjectCard.svelte";
    import PillButton from "./PillButton.svelte";
    import { ProgrammingLanguages } from "$lib/model/ProgrammingLanguages";
    import { ProjectPlatforms } from "$lib/model/ProjectPlatform";
    import { ArrowTopRightOnSquare } from "svelte-heros-v2";
</script>

<div class="-m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProjectCard
        title="Sokoban"
        language={ProgrammingLanguages.kotlin}
        platform={ProjectPlatforms.web}
    >
        <div class="space-y-4">
            <p>{
                `
                Web-based clone of the popular puzzle game Sokoban using Kotlin MPP and the fritz2
                framework.
                `
            }</p>
            <PillButton
                title="Play online"
                href="https://sokoban.haukesomm.de"
                svg={ArrowTopRightOnSquare}
            />
            <PillButton
                title="Visit on GitHub"
                href="https://github.com/haukesomm/Sokoban"
                svg={ArrowTopRightOnSquare}
            />
        </div>
    </ProjectCard>
    <ProjectCard
        title="photoslibrary-exporter"
        language={ProgrammingLanguages.python}
        platform={ProjectPlatforms.macOS}
    >
        <div class="space-y-4">
            <p>{
                `
                Command line tool to export photos and videos from an Apple Photos library, supporting
                different output structures.
                `
            }</p>
            <PillButton
                title="Visit on GitHub"
                href="https://github.com/haukesomm/photoslibrary-exporter"
                svg={ArrowTopRightOnSquare}
            />
        </div>
    </ProjectCard>
    <ProjectCard
        title="portfolio-website"
        language={ProgrammingLanguages.js}
        platform={ProjectPlatforms.web}
    >
        <div class="space-y-4">
            <p>{
                `
                This portfolio website. Built with SvelteKit.
                `
            }</p>
            <PillButton
                title="Visit on GitHub"
                href="https://github.com/haukesomm/haukesomm.de"
                svg={ArrowTopRightOnSquare}
            />
        </div>
    </ProjectCard>
</div>