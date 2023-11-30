/**
 * @typedef {Object} ProgrammingLanguage
 * @property {string} name - The name of the programming language.
 * @property {string} colorClasses - The CSS classes representing the color of the language.
 */

/**
 * @type {Object.<string, ProgrammingLanguage>}
 */
export const ProgrammingLanguages = {
    kotlin: {
        name: 'Kotlin',
        colorClasses: 'bg-purple-500'
    },
    python: {
        name: 'Python',
        colorClasses: 'bg-sky-600'
    },
    js: {
        name: 'JavaScript',
        colorClasses: 'bg-yellow-500'
    }
}