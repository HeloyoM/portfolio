import { JSX } from "react"

export default interface IProject {
    name: string
    icon: string
    lines: ILine[]
    link: ILink
}

export interface ILine {
    name: string
    icon: JSX.Element
}

export interface ILink {
    name: string
    url: string
}