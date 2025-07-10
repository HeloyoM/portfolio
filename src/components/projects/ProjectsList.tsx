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

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >

                <AccordionTopRow project={projects[0]} expanded={expanded === 'panel1'} />

                <AccordionDetails>
                    <FirstPartAccordionDetails project={projects[0]} />

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
                        >{t(`projects.solve.tech.title`)}
                        </Typography>

                        <ProjectTechList project={projects[0]} />

                    </List>

                    {/* <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setBackendOpen(!backendOpen)}>{t('projects.solve.tech.back.name')}</ListItem>

                    {backendOpen &&
                        <>
                            <ListItemContainer>
                                <img src={NestLogo} width={45} height={45} />
                                <Typography>Nest.js framework</Typography>
                            </ListItemContainer>

                            <ProjectTechList project={projects[0]} />

                        </>
                    } */}
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                <AccordionTopRow project={projects[1]} expanded={expanded === 'panel2'} />

                <AccordionDetails>
                    <FirstPartAccordionDetails project={projects[1]} />

                    <Divider />

                    <List>
                        <ProjectTechList project={projects[1]} />
                    </List>

                </AccordionDetails>
            </Accordion>
        </ProjectsContainer >
    )
}

export default ProjectsList