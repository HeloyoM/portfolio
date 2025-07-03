import { Alert, Box, Button, Snackbar, styled, Typography } from "@mui/material";
import Grid2 from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { useState } from "react";

const ReportButton = styled(Button)(({ theme }) => ({
    width: 22,
    height: 22,
    position: 'absolute',
    bottom: 2,
    right: 40,
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[4],
        backgroundColor: '#e3f2fd'
    },
}))

const Footer = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const isMobile = useMediaQuery('(max-width:600px)');

    const openTab = () => {
        window.open('privacy', '_blank');
    };

    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                bgcolor: 'background.paper',
                px: 2,
                py: 2,
                zIndex: 1500,
                display: 'flex',
                flexDirection: { xs: 'row', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Grid2 container spacing={2}>
                <Typography variant="body2" sx={{ position: 'absolute', bottom: 0, alignItems: 'center', display: 'flex' }}>
                    © {new Date().getFullYear()} All Rights Reserved {!isMobile && <main> Meir Juli </main>}
                    <a style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', marginLeft: 6 }} onClick={() => openTab()}>Privacy Policy</a>
                </Typography>

            </Grid2>
        </Box>
    )
}

export default Footer;
