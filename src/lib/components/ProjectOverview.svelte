<script>
    import ProjectCard from "./ProjectCard.svelte";
    import PillButton from "./PillButton.svelte";
    import { ProgrammingLanguages } from "$lib/model/ProgrammingLanguages";
    import { ProjectPlatforms } from "$lib/model/ProjectPlatform";
    import { ArrowTopRightOnSquare } from "svelte-heros-v2";
    import sokoban_logo from "/src/assets/sokoban.svg?raw"
</script>

<div class="-m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProjectCard
        title="Sokoban"
        language={ProgrammingLanguages.kotlin}
        platform={ProjectPlatforms.web}
        svg={sokoban_logo}
    >
        <div class="space-y-4">
            <p>
                {'Web-based clone of the popular puzzle game Sokoban using Kotlin MPP and the '}
                <a class="inline-link" href="https://github.com/jwstegemann/fritz2" target="_blank">fritz2</a>
                {' framework.'}
            </p>
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