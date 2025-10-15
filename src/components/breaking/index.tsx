import { Box, Typography, Button, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BannerContainer = styled(Box)(({ theme }) => ({
    width: '97%',
    background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[6],
    },
    flexWrap: 'wrap',
}));

const BannerText = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1rem',
    '@media (max-width:600px)': {
        fontSize: '0.9rem',
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        width: '100%',
    },
}));

const BookingButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
    fontWeight: 600,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 2),
    fontSize: '0.9rem',
    '&:hover': {
        backgroundColor: '#f0f0f0',
    },
    '@media (max-width:600px)': {
        width: '100%',
    },
}));

const Breaking = () => {
    const { t } = useTranslation();

    return (
        <BannerContainer>
            <BannerText>{t('breaking.text')}</BannerText>
            <BookingButton
                variant="contained"
                sx={{
                    backgroundColor: '#fff',
                    color: 'primary.main',
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
                href='#face-to-face'
            >
                {t('breaking.button')}
            </BookingButton >
        </BannerContainer>
    )
}

export default Breaking