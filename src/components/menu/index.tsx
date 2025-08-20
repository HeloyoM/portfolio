import { Box, Paper, styled, Typography } from '@mui/material'
import HeroSection from '../hero/HeroSection.v2'
import ProjectsList from '../projects/ProjectsList';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import { Presentation } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TechStack from '../techStack';
import AnimatedArrows from '../techStack/AnimatedArrows';
import ReactVsWordPress from '../techStack/ReactVsWordPress';
import { motion } from 'framer-motion';
import HIW from '../HowItWorks/HIW';
import PricingPlans from '../PricingPlans';
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
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                overflowY: 'auto',
                textAlign: 'center',
                px: 2,
            }}
        >

            <HeroSection />

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
        </Box >
    )
}

export default Menu