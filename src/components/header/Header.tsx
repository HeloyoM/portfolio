import { Box, Button, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { Phone as PhoneIcon } from '@mui/icons-material';
import { Email as EmailIcon } from '@mui/icons-material';

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    padding: theme.spacing(1.5, 3),
    background: '#fff',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
}))

const ContactLink = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 500,
    transition: 'color 0.2s ease',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}))


const Header = () => {
    return (
        <motion.div
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <HeaderContainer>

                <ContactLink href="tel:+972587769313">
                    <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1">+972 58-7769313</Typography>
                </ContactLink>

                {/* <ContactHeaderButton href="#contact">Contact us</ContactHeaderButton> */}

                {/* <ContactHeaderButton href="#projects" sx={{ backgroundColor: '#FFA500', color: '#fff', fontFamily: 'Sora' }}>See projects</ContactHeaderButton> */}

                <ContactLink href="mailto:mybs2323@gmail.com">
                    <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body1">mybs2323@gmail.com</Typography>
                </ContactLink>

            </HeaderContainer >
        </motion.div>
    )
}

export default Header