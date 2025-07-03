import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Paper, styled, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Button, CardActionArea, CardMedia, Stack } from '@mui/material'
import Footer from './Footer';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Presentation, Speech, TentTree, Timer } from 'lucide-react';
import { Masonry } from '@mui/lab';
import FavoriteIcon from './assets/solve-icon.png';
import { useTranslation } from 'react-i18next';
import Logo from './assets/logo.png';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DevicesIcon from '@mui/icons-material/Devices';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReactLogo from './assets/react_logo.png';
import NestLogo from './assets/nestjs_logo.png';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HandymanIcon from '@mui/icons-material/Handyman';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Performance from './assets/performance.jpg';
import Scalability from './assets/scalability.jpg';
import UI_UX from './assets/ui_ux.jpg';
import Versions from './assets/versions.jpg';
import WordPressLogo from './assets/wordpress.png';
import Me from './assets/me.jpg';
import CircleIcon from '@mui/icons-material/Circle';
const ParagraphProjects = styled(Typography)(({ theme }) => ({
  // padding: theme.spacing(2),
  fontWeight: 'bold',
  fontFamily: 'David',
  fontSize: 18,
  color: theme.palette.info.main
}));

const GuestSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Align items to the center horizontally
  scrollSnapAlign: 'start',
  padding: theme.spacing(2),
  overflow: 'hidden', // To contain full-width children
}));

const DashboardSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  // borderRadius: theme.shape.borderRadius * 2,
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  // '&:hover': {
  //   transform: 'translateY(-2px)',
  //   boxShadow: theme.shadows[4],
  //   backgroundColor: '#e3f2fd'
  // },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
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

const SectionTitleWithIcon = styled(SectionTitle)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `2px solid ${theme.palette.primary.light}`,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.primary.dark,
}));

function App() {
  const [frontendOpen, setFrontendOpen] = useState(false);
  const [backendOpen, setBackendOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [frontendOpen2, setFrontendOpen2] = useState(false);
  const [backendOpen2, setBackendOpen2] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <Box sx={{
        fontSize: '42px',
        alignItems: 'center',
        display: 'flex',
        background: '#fff',
        justifyContent: 'space-around',
        width: '100%',
        transition: 'all 0.3s ease',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}>
        <Typography>dial now: +972 58-7769313</Typography>
        <Typography>
          <a href={`mailto:mybs2323@gmail.com`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'green' }}>
            Email: Mybs2323@gmail.com
          </a>
        </Typography>
      </Box >


      <Box
        sx={{
          overflowY: 'auto',
          // height: '100vh',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // color: '#fff',
          textAlign: 'center',
          px: 2,
        }}
      >

        <Box sx={{
          px: 4,
          py: 6,
          background: 'linear-gradient(to right, #ffe0e3, #fff6f0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Card
            sx={{
              borderRadius: 6,
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              maxWidth: 600,
              width: '100%',
              textAlign: 'center',
              p: 5,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                {/* <FavoriteIcon color="error" sx={{ fontSize: 50 }} /> */}

                <Typography variant={'h4'} fontWeight={700}>
                  {t('hero.title')}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 450 }}>
                  {t('hero.description')}
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 2,
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: 3,
                    background: 'linear-gradient(to right, #ff4081, #f50057)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      background: 'linear-gradient(to right, #f50057, #d500f9)',
                    },
                  }}
                  href="#benefits"
                >
                  {t('hero.button')}
                </Button>

                <Typography variant="body2" color="text.primary" mt={2}>
                  {t('hero.bottom_line')}
                </Typography>
              </Box>
            </CardContent>
          </Card>

        </Box>
        {/* <Box
          sx={{
            overflowY: 'auto',
            height: '100vh',
            scrollSnapType: 'y mandatory',
          }}
        > */}

        <DashboardSection>
          <SectionTitleWithIcon variant="h5" mb={2}><Presentation />{t('projects.title')}</SectionTitleWithIcon>
          <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 2 }} spacing={1} sx={{ margin: '1 1' }} >
            <Accordion>

              <AccordionSummary>
                <Card sx={{
                  borderRadius: 6,
                  // background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
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

            <Accordion>

              <AccordionSummary>
                <Card sx={{
                  borderRadius: 6,
                  // background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  maxWidth: 600,
                  width: '100%',
                  textAlign: 'center',
                  p: 5,
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
                <ParagraphProjects><Link /><a href={`https://bnei-aliyha.web.app/guest`}>https://bnei-aliyha.web.app/guest</a></ParagraphProjects>
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
          </Masonry>
        </DashboardSection>



        <DashboardSection id="benefits">
          <SectionTitleWithIcon variant="h5" mb={2}><LoyaltyIcon />What is it all about?</SectionTitleWithIcon>
          <Typography sx={{ textAlign: "left", p: 3, fontSize: '19px', fontFamily: 'Roboto', textDecoration: 'underline' }}>Concepts you must know!</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Performance}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t('benefits.performance.name')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.performance.line_1')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.performance.line_2')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Scalability}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t('benefits.scaleability.name')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.scaleability.line_1')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.scaleability.line_2')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={UI_UX}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t('benefits.ui_ux.name')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.ui_ux.line_1')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {t('benefits.ui_ux.line_2')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Versions}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t('benefits.versions.name')}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {t('benefits.versions.line_1')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Box>
            <Typography sx={{ border: '1px solid lightgrey', fontSize: '22px', m: 3, backgroundColor: 'cornflowerblue', color: 'white' }} >{t('benefits.offer.title')}</Typography>

            <Box
              className="arrows-container" // Use className for custom CSS
              ref={sectionRef}
              sx={{
                display: 'flex',
                justifyContent: 'center', // Center the common origin point
                width: '100%',
                maxWidth: '800px', // Matches your card container width, adjust as needed
                margin: '20px auto 0 auto', // Space below text, 0 margin bottom as arrows will grow down
                position: 'relative', // For absolute positioning of arrows
                height: '150px', // Increased height to allow arrows to grow downwards to cards
                pointerEvents: 'none',
                // Optional: Background to visualize container
                // backgroundColor: 'rgba(255,0,0,0.1)'
              }}
            >
              {/* Common starting point / vertical line */}
              <Box className={`central-line ${isVisible ? 'visible' : ''}`}></Box>

              {/* Left Arrow */}
              <Box className={`growing-arrow-line left-line ${isVisible ? 'visible' : ''}`}>
                <Box className="arrow-head left-head"></Box>
              </Box>

              {/* Right Arrow */}
              <Box className={`growing-arrow-line right-line ${isVisible ? 'visible' : ''}`}>
                <Box className="arrow-head right-head"></Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="325"
                    width={150}
                    image={WordPressLogo}
                    alt="react logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {t('benefits.offer.wordpress_card.title')}
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {t('benefits.offer.wordpress_card.line_1')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {t('benefits.offer.wordpress_card.line_2')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {t('benefits.offer.wordpress_card.line_3')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                        {t('benefits.offer.wordpress_card.line_4')}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="325"
                    image={ReactLogo}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Full development of a web application
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_1')}</Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_2')}</Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_3')}</Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                      <CircleIcon sx={{ width: 15, height: 15 }} />
                      <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_4')}</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>

        </DashboardSection>


      </Box >
      <Footer />
    </>);
}

export default App;
