import { Box, Chip, Typography, useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import StepCard from './StepCard'

const NUM_STEPS = 3

const HIW = () => {
    const { t } = useTranslation()

    const steps = Array.from({ length: NUM_STEPS }, (v, k) => v);

    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3, margin: '4% 0' }}>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: 3 }}>
                <Chip label={t('hit.chip')} />

                <Typography sx={{ fontSize: 40, fontFamily: 'tt-commons-pro', color: 'olive', textAlign: 'left' }}>
                    {t('hit.title')}
                </Typography>
            </Box>

            {
                steps.map((v, i) => (
                    <StepCard i={i} />
                ))
            }
        </Box>
    )
}

export default HIW