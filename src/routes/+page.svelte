<script>
    import github_logo from '/src/assets/github-mark.svg?raw'
    import linkedin_logo from '/src/assets/linkedin.svg?raw'
    import ProjectOverview from '$lib/projects/ProjectOverview.svelte';
    import {projects} from "$lib/projects/projects.js";
    import SkillOverview from "$lib/skills/SkillOverview.svelte";

    const description = `
        Professional full-stack software engineer based in the heart of Hamburg, Germany.
        Focusing on web technologies, I am passionate about building high-quality software that is easy to maintain
        and fun to use.
    `;
</script>

<svelte:head>
    <meta name="description" content={description}/>

    <meta property="og:title" content="Hauke Sommerfeld - Full-Stack Software-Engineer" />
    <meta property="og:description" content={description}/>
</svelte:head>

<main class="flex min-h-screen px-8 md:px-24 py-4 md:py-12 flex-col items-center">
    <div class="w-full flex flex-col gap-12 max-w-4xl">
        <div class="pb-4 w-full flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
            <h1 class="w-max text-lg font-semibold whitespace-nowrap">
                Hauke Sommerfeld
            </h1>
            <div class="flex flex-row items-center gap-6">
                <a class="w-5 h-5" href="https://www.linkedin.com/in/hauke-sommerfeld-bb47aa268/" target="_blank">
                    {@html linkedin_logo}
                </a>
                <a class="w-6 h-6" href="https://github.com/haukesomm" target="_blank">
                    {@html github_logo}
                </a>
            </div>
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
                        Focusing on web technologies, I am passionate about building high-quality software that is easy
                        to maintain and fun to use. Additionally, I'm a dedicated advocate for free and open-source
                        software, as well as an open web.
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
            <h2 class="text-xl font-semibold">Skills & Technologies</h2>
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