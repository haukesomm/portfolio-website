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
        color: '#7F52FF'
    },
    python: {
        name: 'Python',
        color: 'rgb(2, 132, 199)'
    },
    js: {
        name: 'JavaScript',
        color: '#F7DF1E'
    }
}