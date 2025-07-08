import { useState } from 'react'
import { Masonry } from '@mui/lab';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Divider, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Speech, TentTree, Timer } from 'lucide-react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DevicesIcon from '@mui/icons-material/Devices';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import FavoriteIcon from '../../assets/solve-icon.png';
import NestLogo from '../../assets/nestjs_logo.png';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HandymanIcon from '@mui/icons-material/Handyman';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ReactLogo from '../../assets/react_logo.png';
import Logo from '../../assets/logo.png';

const ParagraphProjects = styled(Typography)(({ theme }) => ({
    // padding: theme.spacing(2),
    fontWeight: 'bold',
    fontFamily: 'David',
    fontSize: 18,
    color: theme.palette.info.main
}));

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
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 2 }} spacing={1} sx={{ margin: '1 1' }} >


            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >

                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Card sx={{
                        borderRadius: 6,
                        // background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: expanded !== 'panel1' ? '0 8px 24px rgba(0, 0, 0, 0.1)' : 'none',
                        maxWidth: 600,
                        width: '100%',
                        textAlign: 'center',
                        p: 5,
                    }}>
                        <Typography variant={'h4'} fontWeight={700}>
                            {t('projects.solve.name')}
                        </Typography>
                        <CardContent>
                            <img src={FavoriteIcon} height={50} width={80} />
                        </CardContent>
                    </Card>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <HandPlatter /><ParagraphProjects>{t('projects.solve.line_1')}</ParagraphProjects>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <Blend /><ParagraphProjects>{t('projects.solve.line_2')}</ParagraphProjects>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <Timer /><ParagraphProjects>{t('projects.solve.line_3')}</ParagraphProjects>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <Link /><a href={`https://app.solve4.org/`}>https://app.solve4.org/</a>
                    </Box>

                    <Divider />


                    <List>
                        <Typography sx={{ fontWeight: 900, textDecoration: 'underline', fontFamily: 'Sora,sens serif', fontSize: '19px', p: 2, textAlign: 'left' }}>{t('projects.solve.tech.title')}</Typography>
                        <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setFrontendOpen(!frontendOpen)}>{t('projects.solve.tech.front.name')}</ListItem>
                        {frontendOpen &&
                            <>

                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}><img src={ReactLogo} width={45} height={45} /><Typography sx={{ fontSize: '19px', fontWeight: 'bold' }}>React framework <a style={{ fontWeight: 400, fontSize: '16px' }} href="https://www.netguru.com/blog/why-use-react">learn more</a></Typography></Box>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <AutoStoriesIcon />
                                    <ListItemTechnologies>
                                        {t('projects.solve.tech.front.line_1')}
                                    </ListItemTechnologies>
                                </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <DevicesIcon />
                                    <ListItemTechnologies>
                                        {t('projects.solve.tech.front.line_2')}
                                    </ListItemTechnologies>
                                </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <AttachMoneyIcon />
                                    <ListItemTechnologies>
                                        {t('projects.solve.tech.front.line_3')}
                                    </ListItemTechnologies>
                                </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <TipsAndUpdatesIcon />
                                    <ListItemTechnologies>
                                        {t('projects.solve.tech.front.line_4')}
                                    </ListItemTechnologies>
                                </Box>
                            </>
                        }
                    </List>

                    <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setBackendOpen(!backendOpen)}>{t('projects.solve.tech.back.name')}</ListItem>

                    {backendOpen &&
                        <>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}><img src={NestLogo} width={45} height={45} /><Typography>Nest.js framework</Typography></Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                <ViewModuleIcon />
                                <ListItemTechnologies>
                                    {t('projects.solve.tech.back.line_1')}
                                </ListItemTechnologies>
                            </Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                <CorporateFareIcon />
                                <ListItemTechnologies>
                                    {t('projects.solve.tech.back.line_2')}
                                </ListItemTechnologies>
                            </Box>

                        </>
                    }
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Card
                        sx={{
                            borderRadius: 6,
                            // background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: expanded !== 'panel2' ? '0 8px 24px rgba(0, 0, 0, 0.1)' : 'none',
                            maxWidth: 600,
                            width: '100%',
                            textAlign: 'center',
                            p: 5
                        }}>

                        <Typography variant={'h4'} fontWeight={700}>
                            {t('projects.bnei.name')}
                        </Typography>

                        <CardContent>
                            <img
                                src={Logo}
                                alt="logo"
                                height={50} width={80}
                            />
                        </CardContent>
                    </Card>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <TentTree /><ParagraphProjects sx={{ fontWeight: 'bold' }}>{t('projects.bnei.line_1')}</ParagraphProjects>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <Speech /><ParagraphProjects sx={{ fontWeight: 'bold' }}>{t('projects.bnei.line_1')}</ParagraphProjects>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3 }}>
                        <ChartNoAxesGantt /><ParagraphProjects sx={{ fontWeight: 'bold' }}>{t('projects.bnei.line_2')}</ParagraphProjects>
                    </Box>
                    <ParagraphProjects>
                        <Link /><a href={`https://bnei-aliyha.web.app/guest`}>https://bnei-aliyha.web.app/guest</a>
                    </ParagraphProjects>

                    <Divider />

                    <List>
                        <Typography sx={{ fontWeight: 900, textDecoration: 'underline', fontFamily: 'Sora,sens serif', fontSize: '19px', p: 2, textAlign: 'left' }}>{t('projects.solve.tech.title')}</Typography>
                        <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setFrontendOpen2(!frontendOpen2)}>{t('projects.solve.tech.front.name')}</ListItem>


                        {frontendOpen2 &&
                            <>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}><img src={ReactLogo} width={45} height={45} /><Typography sx={{ fontSize: '19px', fontWeight: 'bold' }}>React framework <a style={{ fontWeight: 400, fontSize: '16px' }} href="https://www.netguru.com/blog/why-use-react">learn more</a></Typography></Box>
                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <HandymanIcon />
                                    <ListItemTechnologies>
                                        {t('projects.bnei.tech.front.line_1')}
                                    </ListItemTechnologies>
                                </Box>

                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <RecyclingIcon />
                                    <ListItemTechnologies>
                                        {t('projects.bnei.tech.front.line_2')} <a href="https://medium.com/@reactmasters.in/reusable-components-in-react-a-complete-guide-3a0124cfac8f">learn more</a>
                                    </ListItemTechnologies>
                                </Box>

                            </>
                        }
                    </List>
                    <ListItem sx={{ cursor: 'pointer', textDecoration: 'underline', color: 'green', fontWeight: 600 }} onClick={() => setBackendOpen2(!backendOpen2)}>{t('projects.bnei.tech.back.name')}</ListItem>
                    {backendOpen2 &&
                        <>
                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}><img src={NestLogo} width={45} height={45} /><Typography>Nest.js framework</Typography></Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                <ViewModuleIcon />
                                <ListItemTechnologies>
                                    {t('projects.bnei.tech.back.line_1')}
                                </ListItemTechnologies>
                            </Box>

                            <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                <CorporateFareIcon />
                                <ListItemTechnologies>
                                    {t('projects.bnei.tech.back.line_2')}
                                </ListItemTechnologies>
                            </Box>

                        </>
                    }
                </AccordionDetails>
            </Accordion>
        </Masonry >
    )
}

export default ProjectsList