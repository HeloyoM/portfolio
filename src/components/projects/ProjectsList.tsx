import { useState } from 'react'
import { Accordion, AccordionDetails, Divider, List, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import projects from './projects';
import ProjectsContainer from './ProjectsContainer';
import AccordionTopRow from './AccordionTopRow';
import FirstPartAccordionDetails from './FirstPartAccordionDetails';
import ProjectTechList from './ProjectTechList';

const ProjectsList = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const { t } = useTranslation();

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <ProjectsContainer>

            {
                projects.map((p, i) => (
                    <Accordion expanded={expanded === p.name} onChange={handleChange(p.name)} >

                        <AccordionTopRow project={p} expanded={expanded === p.name} />

                        <AccordionDetails>
                            <FirstPartAccordionDetails project={p} />

                            <Divider />

                            <List>
                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        textDecoration: 'underline',
                                        fontFamily: 'Sora,sens serif',
                                        fontSize: '19px',
                                        p: 2,
                                        textAlign: 'left'
                                    }}
                                >{t(`projects.${p.name}.tech.title`)}
                                </Typography>

                                <ProjectTechList project={p} />

                            </List>

                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </ProjectsContainer >
    )
}

export default ProjectsList