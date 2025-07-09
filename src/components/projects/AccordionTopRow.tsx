import { AccordionSummary } from '@mui/material'
import ProjectHero from './ProjectHero'
import IProject from './IProject.interface'

type Props = {
    project: IProject
    expanded: boolean
}
const AccrodionTopRow = (props: Props) => {
    return (
        <AccordionSummary>
            <ProjectHero project={props.project} expanded={props.expanded} />
        </AccordionSummary>
    )
}

export default AccrodionTopRow