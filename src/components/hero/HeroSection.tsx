import { Box, Button, styled, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';

const HeroSectionContainer = styled(Box)(({
    background: '#ADD8E6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '6%',
    height: '100vh',
    color: '#fff'
}))

const LearnMoreButton = styled(Button)(({
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
}))
const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            style={{
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                zIndex: 2,
            }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >

            <HeroSectionContainer>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>

                    <Typography variant={'h3'} fontWeight={900}>
                        {t('hero.title')}
                    </Typography>

                    <Typography variant="body1" sx={{ maxWidth: 450 }}>
                        {t('hero.description')}
                    </Typography>

                    <LearnMoreButton
                        variant="contained"
                        size="large"
                        rel="noopener noreferrer"
                        href="#benefits"
                    >
                        {t('hero.button')}
                    </LearnMoreButton>

                    <Typography variant="body2" color={'text.primary'} mt={2}>
                        {t('hero.bottom_line')}
                    </Typography>
                </Box>

            </HeroSectionContainer>
        </motion.div>
    )
}

export default HeroSection