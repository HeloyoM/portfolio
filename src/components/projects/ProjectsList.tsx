import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Speech, TentTree, Timer } from 'lucide-react';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import NestLogo from '../../assets/nestjs_logo.png';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HandymanIcon from '@mui/icons-material/Handyman';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ReactLogo from '../../assets/react_logo.png';
import ProjectHero from './ProjectHero';
import projects from './projects';
import ProjectsContainer from './ProjectsContainer';
import AccordionTopRow from './AccordionTopRow';
import FirstPartAccordionDetails from './FirstPartAccordionDetails';
import ProjectTechList from './ProjectTechList';

const ListItemTechnologies = styled(ListItemText)(({ }) => ({
    fontSize: '18px',
    fontFamily: 'David',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'text',
        transform: 'translateY(-2px)',
        boxShadow: '0 2px 2px 0 lightgrey',
        backgroundColor: '#e3f2fd'
    },
}))


const BulltProjectContainer = styled(Box)(({
    display: 'grid',
    gridTemplateColumns: '30px auto',
    padding: 20
}))

const ListItemContainer = styled(Box)(({
    display: 'grid',
    gridTemplateColumns: '30px auto',
    p: 3, alignItems: 'center'
}))

const ProjectsList = () => {
    const [frontendOpen, setFrontendOpen] = useState(false);
    const [backendOpen, setBackendOpen] = useState(false);
    const [frontendOpen2, setFrontendOpen2] = useState(false);
    const [backendOpen2, setBackendOpen2] = useState(false);
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

                    <BulltProjectContainer>
                        <Link />
                        <a href={projects[0].link.url}>{projects[0].link.url}</a>
                    </BulltProjectContainer>

                    <Divider />


                    <List>
                        <Typography
                            sx={{ fontWeight: 900, textDecoration: 'underline', fontFamily: 'Sora,sens serif', fontSize: '19px', p: 2, textAlign: 'left' }}
                        >{t('projects.solve.tech.title')}
                        </Typography>

                        {/* <ListItem
                            sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }}
                            onClick={() => setFrontendOpen(!frontendOpen)}>
                            {t('projects.solve.tech.front.name')}
                        </ListItem> */}


                        <ProjectTechList project={projects[0]} />

                        {/* <ListItemContainer>
                                    <img src={ReactLogo} width={45} height={45} />
                                    <Typography  sx={{ fontSize: '19px', fontWeight: 'bold' }}>
                                    React framework 
                                    <a style={{ fontWeight: 400, fontSize: '16px' }} href="https://www.netguru.com/blog/why-use-react">
                                    learn more
                                    </a>
                                    </Typography>
                                </ListItemContainer>*/}



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

                    <BulltProjectContainer>
                        <Link />
                        <a href={projects[1].link.url}>{projects[1].link.url}</a>
                    </BulltProjectContainer>

                    <Divider />

                    <List>
                        {/* <Typography sx={{ fontWeight: 900, textDecoration: 'underline', fontFamily: 'Sora,sens serif', fontSize: '19px', p: 2, textAlign: 'left' }}>{t('projects.solve.tech.title')}</Typography> */}

                        {/* <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setFrontendOpen2(!frontendOpen2)}>{t('projects.solve.tech.front.name')}</ListItem> */}


                        <ProjectTechList project={projects[1]} />

                    </List>

                            {/* <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}><img src={NestLogo} width={45} height={45} /><Typography>Nest.js framework</Typography></Box> */}

                </AccordionDetails>
            </Accordion>
        </ProjectsContainer >
    )
}

export default ProjectsList