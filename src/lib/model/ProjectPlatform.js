import { CommandLine, GlobeEuropeAfrica } from "svelte-heros-v2"

/**
 * @typedef {Object} ProjectPlatform
 * @property {string} name - Name of the platform (e.g. macOS, ...)
 * @property {import('svelte').SvelteComponent} svg - SVG icon associated with the given platform
 */

/**
 * @type {Object.<string, ProjectPlatform>}
 */
export const ProjectPlatforms = {
    web: {
        name: 'Web',
        svg: CommandLine
    },
    macOS: {
        name: 'macOS',
        svg: GlobeEuropeAfrica
    }
}