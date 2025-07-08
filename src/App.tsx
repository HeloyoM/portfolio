import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Paper, styled, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Button, CardActionArea, CardMedia, Stack } from '@mui/material'
import Footer from './Footer';
import { Blend, ChartNoAxesGantt, HandPlatter, Link, Presentation, Speech, TentTree, Timer, Languages } from 'lucide-react';


import { useTranslation } from 'react-i18next';

import LoyaltyIcon from '@mui/icons-material/Loyalty';

import ReactLogo from './assets/react_logo.png';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import UI_UX from './assets/ui_ux.jpg';
import Versions from './assets/versions.jpg';
import WordPressLogo from './assets/wordpress.png';
import CircleIcon from '@mui/icons-material/Circle';
import GuestContactUs from './locales/ContactUs';
import LanguageToggleButton from './components/LanguageToggleButton';
import WhatsappButton from './components/WhatsappButton';
import TechStack from './components/techStack';
import HeroSection from './components/hero/HeroSection';
import Header from './components/header/Header';
import ProjectsList from './components/projects/ProjectsList';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation();

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
      <Header />


      <Box
        sx={{
          overflowY: 'auto',
          textAlign: 'center',
          px: 2,
        }}
      >

        <HeroSection />

        <DashboardSection id="projects">
          <SectionTitleWithIcon variant="h5" mb={2}><Presentation />{t('projects.title')}</SectionTitleWithIcon>
          <ProjectsList/>
        </DashboardSection>



        <DashboardSection id="benefits">
          <SectionTitleWithIcon variant="h5" mb={2}><LoyaltyIcon />{t('benefits.title')}</SectionTitleWithIcon>
          <Typography sx={{ p: 3, fontSize: '19px', fontFamily: 'Roboto', textDecoration: 'underline' }}>{t('benefits.sub_title')}</Typography>
          <TechStack />



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

              <Box className={`central-line ${isVisible ? 'visible' : ''}`}></Box>


              <Box className={`growing-arrow-line left-line ${isVisible ? 'visible' : ''}`}>
                <Box className="arrow-head left-head"></Box>
              </Box>


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

              <Paper sx={{ backgroundColor: 'cornflowerblue', p: 3 }}>

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
              </Paper>
            </Box>
          </Box>
        </DashboardSection>


      </Box >

      <GuestContactUs />

      <Footer />

      <LanguageToggleButton />
      <WhatsappButton />
    </>);
}

export default App;
