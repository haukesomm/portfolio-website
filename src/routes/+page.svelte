<script>
    import github_logo from '/src/assets/github-mark.svg?raw'
    import ProjectOverview from '$lib/components/ProjectOverview.svelte';
    import {projects} from "$lib/projects.js";
    import SkillOverview from "$lib/components/SkillOverview.svelte";
</script>

<main class="flex min-h-screen px-8 md:px-24 py-4 md:py-12 flex-col items-center">
    <div class="w-full flex flex-col gap-12 max-w-4xl">
        <div class="pb-4 w-full flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
            <h1 class="w-max text-lg font-semibold whitespace-nowrap">
                Hauke Sommerfeld
            </h1>
            <a class="w-6 h-6" href="https://github.com/haukesomm" target="_blank">
                {@html github_logo}
            </a>
        </div>
        <div class="space-y-6">
            <p class="text-2xl font-semibold">
                {"Hey, I'm Hauke! 👋🏻👨🏼‍💻🌊⚓️🪴"}
            </p>
            <div class="leading-relaxed space-y-4">
                <p>
                    {
                        `
                        I'm a professional full-stack software engineer based in the heart of Hamburg, Germany. 
                        Currently, I'm focusing on both back-end and front-end web development. Additionally, I'm a
                        dedicated advocate for free and open-source software, as well as an open web.
                        `
                    }
                </p>
                <p>
                    {
                        `
                        In my personal life, I enjoy exploring new places, both locally and abroad, taking care of 
                        my plants, and playing games on my Nintendo Switch. Also, I'm interested in sustainable and 
                        community-focused urban development.
                        `
                    }
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-6">
            <h2 class="text-xl font-semibold">Skills</h2>
            <div>
                <SkillOverview/>
            </div>
        </div>
        <div class="space-y-6">
            <h2 class="text-xl font-semibold">Featured Projects</h2>
            <ProjectOverview projects={projects}/>
        </div>
        <div class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
            <span>© 2024, Hauke Sommerfeld</span>
            <span>Made with ♡ in Hamburg, Germany</span>
        </div>
    </div>
</main>