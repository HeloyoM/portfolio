import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
    i: number
}
const StepCard = (props: Props) => {
    const { t } = useTranslation()
    return (
        <Box sx={{ border: '1px solid lightgrey', width: '250px', height: '350px', borderRadius: 8, padding: 3 }}>
            <Box
                sx={{
                    backgroundColor: 'yellow',
                    borderRadius: '50%',
                    width: 'fit-content',
                    height: 'fit-content',
                    padding: '16px 16px',
                    margin: 2,
                    fontFamily: 'Sora, sens-serif',
                    fontSize: 19,
                    fontWeight: 600
                }}>{props.i + 1}</Box>

            <Typography
                sx={{ color: 'olive', fontSize: 30, wordBreak: 'break-word', textAlign: 'left' }}>
                {t(`hit.card_${props.i}.title`)}
            </Typography>
            <Typography sx={{ color: 'grey', fontSize: 21, textAlign: 'left' }}>
                {t(`hit.card_${props.i}.description`)}
            </Typography>
        </Box>
    )
}

export default StepCard