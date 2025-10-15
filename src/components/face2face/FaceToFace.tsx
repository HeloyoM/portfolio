import { Box, Button, Paper, Typography, styled } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';


const DashboardSection = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    color: '#fff',
    boxShadow: theme.shadows[6],
    borderRadius: theme.spacing(2),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[12],
    },
}));


const SectionTitleWithIcon = styled(Typography)(({ theme }) => ({
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
}));

const IconCircle = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
    borderRadius: '50%',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 28,
}));



const FaceToFace = () => {

    const { t } = useTranslation();

    const handleClick = () => {
        let text = `פנייה%20מאתר%20לקביעת%20פגישה%20`
        window.open(`https://wa.me/972587769313?text=${text}`, '_blank');
    };

    return (
        <DashboardSection id="face-to-face">
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <IconCircle>
                    <LocationOn fontSize="inherit" />
                </IconCircle>
                <SectionTitleWithIcon variant="h5">
                    {t('faceToFace.title')}
                </SectionTitleWithIcon>
            </Box>

            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
                {t('faceToFace.description')}
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, fontWeight: 500 }}>
                {t('faceToFace.address')}
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#fff',
                    color: 'primary.main',
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
                onClick={handleClick}
            >
                {t('faceToFace.cta')}
            </Button>
        </DashboardSection>
    )
}

export default FaceToFace