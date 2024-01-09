/**
 * @typedef {Object} ProgrammingLanguage
 * @property {string} name - The name of the programming language.
 * @property {string} color - The CSS color representing the color of the language.
 */

/**
 * @type {Object.<string, ProgrammingLanguage>}
 */
export const programming_languages = {
    kotlin: {
        name: 'Kotlin',
        color: 'rgb(168, 85, 247)'
    },
    python: {
        name: 'Python',
        color: 'rgb(2, 132, 199)'
    },
    js: {
        name: 'JavaScript',
        color: 'rgb(250, 204, 21)'
    }
}