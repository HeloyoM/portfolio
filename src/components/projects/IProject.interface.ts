import { JSX } from "react"
import { ITech } from "../techStack/ITech.interface"

export default interface IProject {
    name: string
    icon: string
    lines: ILine[]
    link: ILink
    tech: ITech[]
}

export interface ILine {
    name: string
    icon: JSX.Element
    opt: any
}

export interface ILink {
    name: string
    url: string
}