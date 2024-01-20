import kotlin_icon from "../../assets/kotlin.svg?raw";
import gradle_icon from "../../assets/gradle.svg?raw";
import html5_icon from "../../assets/html5.svg?raw";
import css_icon from "../../assets/css3.svg?raw";
import ts_icon from "../../assets/typescript.svg?raw";
import tailwind_icon from "../../assets/tailwindcss.svg?raw";
import spring_icon from "../../assets/spring.svg?raw";
import azure_icon from "../../assets/azuredevops.svg?raw";
import fire_icon from "heroicons/24/solid/fire.svg?raw";

export type Skill = {
    title: string,
    svg: string,
    color: string
}

export const skill: Skill[] = [
    {
        title: "Kotlin",
        svg: kotlin_icon,
        color: '#7F52FF'
    },
    {
        title: "Java",
        svg: fire_icon,
        color: '#f85700'
    },
    {
        title: "Spring",
        svg: spring_icon,
        color: '#6DB33F'
    },
    {
        title: "HTML5",
        svg: html5_icon,
        color: '#E34F26'
    },
    {
        title: "CSS3",
        svg: css_icon,
        color: '#1572B6'
    },
    {
        title: "TypeScript",
        svg: ts_icon,
        color: '#3178C6'
    },
    {
        title: "TailwindCSS",
        svg: tailwind_icon,
        color: '#06B6D4'
    },
    {
        title: "Microsoft-Azure",
        svg: azure_icon,
        color: '#0078D7'
    },
    {
        title:  "Gradle",
        svg: gradle_icon,
        color: '#046b83'
    },
]