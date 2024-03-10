<script lang="ts">
    import ProjectOverview from '$lib/components/ProjectOverview.svelte';
    import SkillOverview from "$lib/components/SkillOverview.svelte";
    import SubSection from "$lib/components/SubSection.svelte";
    import type {PageData} from "./$types"
    import Headline from "$lib/components/Headline.svelte";

    export let data: PageData;
</script>

<div class="space-y-6">
    <Headline text="Hey, I'm Hauke! 👋🏻👨🏼‍💻🌊⚓️🪴"/>
    <div class="leading-relaxed space-y-4">
        <p>
            {`I'm a professional full-stack software engineer based in the heart of Hamburg, Germany.
            Focusing on web technologies, I am passionate about building high-quality software that is easy
            to maintain and fun to use. Additionally, I'm a dedicated advocate for free and open-source
            software, as well as an open web.`}
        </p>
    </div>
</div>

<SubSection title="Skills & Technologies">
    <SkillOverview/>
</SubSection>

<SubSection title="Featured GitHub Projects">
    <div class="-m-4">
        <ProjectOverview userWithPinnedRepos={data}/>
    </div>
</SubSection>