import IProject, { ILink } from "./IProject.interface";
import SolveIcon from '../../assets/solve-icon.png';
import BneiIcon from '../../assets/logo.png';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Speech, TentTree, Timer } from 'lucide-react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DevicesIcon from '@mui/icons-material/Devices';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ReactLogo from '../../assets/react_logo.png';

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
        ],
        link: links.find((l: ILink) => l.name === 'solve'),
        tech: [
            {
                name: 'front',
                items: [
                    {
                        name: 'title',
                        icon: <img src={ReactLogo} width={45} height={45} />,
                    },
                    {
                        name: 'line_1',
                        icon: <AutoStoriesIcon />
                    },
                    {
                        name: 'line_2',
                        icon: <DevicesIcon />,
                    },
                    {
                        name: 'line_3',
                        icon: <AttachMoneyIcon />,
                    },
                    {
                        name: 'line_4',
                        icon: <TipsAndUpdatesIcon />,
                    }
                ]
            }
        ]
    },
    {
        name: "bnei",
        icon: BneiIcon,
        lines: [
            {
                name: "line_1",
                icon: <TentTree />
            },
            {
                name: "line_2",
                icon: <ChartNoAxesGantt />

            },
            {
                name: "line_3",
                icon: <Speech />
            }
        ],
        link: links[1],
        tech: [
            {
                name: "front",

            },
            {
                name: "back",

            }
        ]
    }
] as IProject[]

