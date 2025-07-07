import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, styled } from '@mui/material';

const LangBoxContainer = styled(Box)(({
    position: 'fixed',
    bottom: '40px',
    right: '20px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'transform 0.2s ease-in-out',
}))

const WhatsappButton: React.FC = () => {

    const handleClick = () => {
        window.open(`https://wa.me/972587769313`, '_blank');
    };

    return (
        <LangBoxContainer onClick={handleClick}>
            <WhatsAppIcon />
        </LangBoxContainer>
    );
}

export default WhatsappButton;