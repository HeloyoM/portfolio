import { Box, Button, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const HeaderContainer = styled(Box)(({
    fontSize: '42px',
    alignItems: 'center',
    display: 'flex',
    background: '#fff',
    justifyContent: 'space-around',
    width: '100%',
    transition: 'all 0.3s ease',
    // position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
}))

const ContactHeaderButton = styled(Button)(({
    border: '1px solid lightgrey',
    borderRadius: 8,
    margin: 3
}))
const Header = () => {
    return (
        <motion.div
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <HeaderContainer>

                <Typography>dial now: +972 58-7769313</Typography>

                <ContactHeaderButton href="#contact">Contact us</ContactHeaderButton>

                <ContactHeaderButton href="#projects" sx={{ backgroundColor: '#FFA500', color: '#fff', fontFamily: 'Sora' }}>See projects</ContactHeaderButton>

                <Typography>
                    <a href={`mailto:mybs2323@gmail.com`} style={{ textDecoration: 'none', cursor: 'pointer', color: 'green' }}>
                        Email: Mybs2323@gmail.com
                    </a>
                </Typography>

            </HeaderContainer >
        </motion.div>
    )
}

export default Header