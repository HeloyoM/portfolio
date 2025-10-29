import { Box, Paper, styled, Typography } from '@mui/material'
import HeroSection from '../hero/HeroSection.v2'
import { useTranslation } from 'react-i18next';
import PricingPlans from '../PricingPlans';
import FaceToFace from '../face2face/FaceToFace';
import Breaking from '../breaking';
import Syllabus from '../syllabus/Syllabus';

const DashboardSection = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[2],
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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

const Menu = () => {

    return (
        <Box
            sx={{
                overflowY: 'auto',
                textAlign: 'center',
                px: 2,
            }}
        >
            <Breaking
                text='breaking.text'
                btn='breaking.button'
                style={{
                    btn_bground: '#fff',
                    btn_color: 'primary.main',
                }} />

            <HeroSection />


            <Breaking
                text='n8n.text'
                style={{
                    color: 'black',
                    background: 'linear-gradient(to right, #ffe0e3, #fff6f0)',
                    btn_bground: '#fff',
                }} />

            <Syllabus />

            {/* <DashboardSection id="projects">
                <SectionTitleWithIcon variant="h5" mb={2}>
                    <Presentation />{t('projects.title')}
                </SectionTitleWithIcon>

                <ProjectsList />
            </DashboardSection> */}


            <Box id="plans">

                {/* <TechStack /> */}

                <PricingPlans />
                {/* <Box>
                    <Typography sx={{ border: '1px solid lightgrey', fontSize: '22px', m: 3, backgroundColor: 'cornflowerblue', color: 'white' }} >{t('benefits.offer.title')}</Typography>

                    <AnimatedArrows />

                    <ReactVsWordPress />
                </Box> */}
            </Box>

            {/* <HIW /> */}

            <FaceToFace />
        </Box >
    )
}

export default Menu