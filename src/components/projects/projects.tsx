import IProject, { ILink } from "./IProject.interface";
import SolveIcon from '../../assets/solve-icon.png';
import BneiIcon from '../../assets/logo.png';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Speech, TentTree, Timer } from 'lucide-react';

const links: ILink[] = [
    {
        name: "solve",
        url: "https://app.solve4.org/"
    },
    {
        name: "bnei",
        url: "https://bnei-aliyha.web.app/guest"
    }
]

export default [
    {
        name: "solve",
        icon: SolveIcon,
        link: links[0],
        lines: [
            {
                name: "line_1",
                icon: <HandPlatter />
            },
            {
                name: "line_2",
                icon: <Blend />

            },
            {
                name: "line_3",
                icon: <Timer />
            }
        ]
    },
    {
        name: "bnei",
        icon: BneiIcon,
        link: links[1],
        lines: [
            {
                name: "line_1",
                icon: <TentTree />
            },
            {
                name: "line_2",
                icon: <Speech />

            },
            {
                name: "line_3",
                icon: <ChartNoAxesGantt />
            }
        ]
    }
] as IProject[]

