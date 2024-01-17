<script lang="ts">
    import ProjectOverview from '$lib/components/ProjectOverview.svelte';
    import SkillOverview from "$lib/components/SkillOverview.svelte";
    import SubSection from "$lib/components/SubSection.svelte";
</script>

<div class="space-y-6">
    <p class="text-2xl font-semibold">
        {"Hey, I'm Hauke! 👋🏻👨🏼‍💻🌊⚓️🪴"}
    </p>
    <div class="leading-relaxed space-y-4">
        <p>
            {`I'm a professional full-stack software engineer based in the heart of Hamburg, Germany.
            Focusing on web technologies, I am passionate about building high-quality software that is easy
            to maintain and fun to use. Additionally, I'm a dedicated advocate for free and open-source
            software, as well as an open web.`}
        </p>
        <p>
            {`In my personal life, I enjoy exploring new places, both locally and abroad, taking care of
            my plants, and playing games on my Nintendo Switch. Also, I'm interested in sustainable and
            community-focused urban development.`}
        </p>
    </div>
</div>

<SubSection title="Skills & Technologies">
    <SkillOverview/>
</SubSection>

<SubSection title="Featured Projects">
    <ProjectOverview/>
</SubSection>