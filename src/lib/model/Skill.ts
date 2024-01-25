import {
    siKotlin,
    siGradle,
    siHtml5,
    siCss3,
    siTypescript,
    siTailwindcss,
    siSpring,
    siAzuredevops, siPlaywright, siGithub
} from "simple-icons";

export type Skill = {
    title: string,
    path: string,
    color?: string
}

const hexColor = (hex: string) => `#${hex}`

export const skill: Skill[] = [
    {
        title: "Kotlin",
        path: siKotlin.path,
        color: hexColor(siKotlin.hex)
    },
    {
        title: "Spring",
        path: siSpring.path,
        color: hexColor(siSpring.hex)
    },
    {
        title: "HTML5",
        path: siHtml5.path,
        color: hexColor(siHtml5.hex)
    },
    {
        title: "CSS3",
        path: siCss3.path,
        color: hexColor(siCss3.hex)
    },
    {
        title: "TypeScript",
        path: siTypescript.path,
        color: hexColor(siTypescript.hex)
    },
    {
        title: "TailwindCSS",
        path: siTailwindcss.path,
        color: hexColor(siTailwindcss.hex)
    },
    {
        title: "Microsoft-Azure",
        path: siAzuredevops.path,
        color: hexColor(siCss3.hex)
    },
    {
        title: "Gradle",
        path: siGradle.path,
        color: '#046b83'
    },
]