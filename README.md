# Portfolio Website

![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

This is my personal portfolio website. It is built using SvelteKit, TailwindCSS, and TypeScript.  
The site can be viewed at [https://haukesomm.de](https://haukesomm.de).

Currently, this project is not configured to be used as a template. However, feel free to use it as a reference for
your own projects.

## Setup

In order to be able to talk to the GitHub API, you will need to create a personal access token and add it to a `.env` 
file in the root of the project. The `.env` file should look like this:

```
PUBLIC_GITHUB_PAT=your_token_here
```

Alternatively, you can set the `PUBLIC_GITHUB_PAT` environment variable to your token directly.

> **Note:** The environment variables specified in .env are only available in development. In production, you will need to
> set the environment variables directly.

> **Important**: The token **WILL BE PUBLICLY VISIBLE** in the source code of the built website and in the dev tools of
> the browser.  
> Do not use a token that has access to private repositories or other sensitive data! It only needs read access to 
> public repositories.
