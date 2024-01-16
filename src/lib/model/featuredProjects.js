/**
 * @typedef {Object} Project
 * @property {string} title - The title of the project.
 * @property {string} description - The description of the project.
 * @property {string} svg - Optional SVG icon for the project.
 * @property {string} app_link_title - Optional title for the link to the app.
 * @property {string} app_link_href - Optional href for the link to the app.
 * @property {string} github_link - The link to the GitHub repository of the project.
 * @property {string} language - The programming language of the project.
 */

/**
 * @type {Object.<string, Project>}
 */
export const featuredProjects = [
    {
        title: 'Sokoban',
        description: 'Web-based clone of the popular puzzle game Sokoban using Kotlin MPP and the fritz2 framework.',
        svg: `<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="7" y="1" width="18" height="30" style="fill:#5ff; stroke-width:0px;"></rect><rect x="8.93" y="8.93" width="14.14" height="14.14" transform="translate(-6.63 16) rotate(-45)" style="fill:#69f; stroke-width:0px;"></rect><polygon points="26 31 28.59 31 31 28.59 31 16.5 26 16.5 26 31" style="fill:#f5f5f5; stroke-width:0px;"></polygon><polygon points="26 1 26 15.5 31 15.5 31 3.41 28.59 1 26 1" style="fill:#f5f5f5; stroke-width:0px;"></polygon><polygon points="6 16.5 1 16.5 1 28.59 3.41 31 6 31 6 16.5" style="fill:#f5f5f5; stroke-width:0px;"></polygon><polygon points="6 1 3.41 1 1 3.41 1 15.5 6 15.5 6 1" style="fill:#f5f5f5; stroke-width:0px;"></polygon><polygon points="29 31 3 31 3 32 29 32 29 31 29 31" style="fill:#1d1d1b; stroke-width:0px;"></polygon><path d="m16,7.41l8.59,8.59-8.59,8.59-8.59-8.59,8.59-8.59m0-1.41l-10,10,10,10,10-10-10-10h0Z" style="fill:#1d1d1b; stroke-width:0px;"></path><polygon points="7 0 6 0 6 32 7 32 7 0 7 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="26 0 25 0 25 32 26 32 26 0 26 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="16.5 0 15.5 0 15.5 7 16.5 7 16.5 0 16.5 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="16.5 25 15.5 25 15.5 32 16.5 32 16.5 25 16.5 25" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="32 15.5 0 15.5 0 16.5 32 16.5 32 15.5 32 15.5" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="29 0 3 0 3 1 29 1 29 0 29 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="1 3 0 3 0 29 1 29 1 3 1 3" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="32 3 31 3 31 29 32 29 32 3 32 3" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="29 0 28.29 .71 31.29 3.71 32 3 29 0 29 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points=".71 28.29 0 29 3 32 3.71 31.29 .71 28.29 .71 28.29" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="3 0 0 3 .71 3.71 3.71 .71 3 0 3 0" style="fill:#1d1d1b; stroke-width:0px;"></polygon><polygon points="31.29 28.29 28.29 31.29 29 32 32 29 31.29 28.29 31.29 28.29" style="fill:#1d1d1b; stroke-width:0px;"></polygon></svg>`,
        app_link_title: 'Play online',
        app_link_href: 'https://sokoban.haukesomm.de',
        github_link: 'https://github.com/haukesomm/Sokoban',
        language: 'kotlin'
    },
    {
        title: 'apple-photos-export',
        description: 'Command line tool to export photos and videos from an Apple Photos library, supporting different output structures. ',
        github_link: 'https://github.com/haukesomm/apple-photos-export',
        language: 'python'
    },
    {
        title: 'portfolio-website',
        description: 'This portfolio website. Built with SvelteKit, JavaScript and Tailwind CSS.',
        // TODO: Re-enable when the repo is public
        // github_link: 'https://github.com/haukesomm/portfolio-website',
        language: 'js'
    }
]