<script lang="ts">
    import "../app.css";
    import linkedin_logo from "../assets/linkedin.svg?raw";
    import github_logo from "../assets/github-mark.svg?raw";

    const description: string = `
        Professional full-stack software engineer based in the heart of Hamburg, Germany.
        Focusing on web technologies, I am passionate about building high-quality software that is easy to maintain
        and fun to use.`;
</script>

<svelte:head>
  <meta name="description" content={description}/>

  <meta property="og:title" content="Hauke Sommerfeld - Full-Stack Software-Engineer" />
  <meta property="og:description" content={description}/>
</svelte:head>

<main class="flex min-h-screen px-8 md:px-24 pb-4 md:py-12 flex-col items-center">
  <div class="w-full flex flex-col gap-12 max-w-4xl">
    <div class="sticky top-0 px-6 -mx-6 bg-page">
      <div class="py-4  px-4 -mx-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
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
    </div>

    <slot/>

    <div class="flex flex-row flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
      <span>© 2024, Hauke Sommerfeld</span>
      <span>Made with ♡ in Hamburg, Germany</span>
    </div>
  </div>
</main>