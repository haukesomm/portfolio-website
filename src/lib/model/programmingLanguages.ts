export type ProgrammingLanguage = {
    name: string,
    color: string
}

export type ProgrammingLanguages = {
    [key: string]: ProgrammingLanguage
}

export const programmingLanguages: ProgrammingLanguages = {
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