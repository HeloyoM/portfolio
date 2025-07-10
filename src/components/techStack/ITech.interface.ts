import { JSX } from "react";

export interface ITech {
    name: string;
    icon: string;
    items: ITechItem[]
}

export interface ITechItem {
    name: string
    icon: JSX.Element,
}