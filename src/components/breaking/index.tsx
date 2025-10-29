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

type Props = {
    text: string
    btn?: string
    style: {
        color?: string,
        background?: string,
        btn_bground?: string
        btn_color?: string
    }
}

const Breaking = (props: Props) => {
    const { t } = useTranslation();
    const breakText = props.text;

    const handleClick = () => {
        let text = `פנייה%20מאתר%20לקביעת%20פגישה%20`
        window.open(`https://wa.me/972587769313?text=${text}`, '_blank');
    };

    let innterText = typeof t(breakText) === 'string' ? t(breakText) : breakText;
    let innterButtonText = typeof t(props.btn!) === 'string' ? t(props.btn!) : props.btn;

    return (
        <BannerContainer sx={{ color: props.style.color, background: props.style.background }}>
            <BannerText>{innterText}</BannerText>
            {props.btn && <BookingButton
                variant="contained"
                sx={{
                    backgroundColor: props.style.btn_bground,
                    color: props.style.btn_color,
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
                onClick={handleClick}
            >
                {innterButtonText}
            </BookingButton >}
        </BannerContainer>
    )
}

export default Breaking