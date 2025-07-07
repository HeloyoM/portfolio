import { Box, styled } from '@mui/material';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LangBoxContainer = styled(Box)(({
    position: 'fixed',
    bottom: '40px',
    left: '20px',
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

const LanguageToggleButton = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'he' : 'en';
        i18n.changeLanguage(newLang);
        document.body.dir = newLang === 'he' ? 'rtl' : 'ltr'; // ⬅ RTL/LTR switch
    };

    return (
        <LangBoxContainer>
            <Languages onClick={toggleLanguage}>
                {i18n.language === 'en' ? 'עברית' : 'English'}
            </Languages>
        </LangBoxContainer>
    )
}

export default LanguageToggleButton;