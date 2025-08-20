import { Box, Container, Typography, Button, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                bgcolor: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                color: "white",
                py: { xs: 8, md: 14 },
                textAlign: "center",
                backgroundImage: "url('https://source.unsplash.com/1600x900/?coding,computer')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >
            {/* Overlay for readability */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.6)",
                }}
            />

            <Container
                maxWidth="md"
                sx={{ position: "relative", zIndex: 1 }}
            >
                <Typography variant="overline" sx={{ letterSpacing: 2 }}>
                    {t('hero.header')}
                </Typography>

                <Typography
                    variant="h2"
                    fontWeight={800}
                    gutterBottom
                    sx={{ mt: 2 }}
                >
                    {t('hero.title')}
                </Typography>

                <Typography
                    variant="h6"
                    color="grey.300"
                    sx={{ mb: 4 }}
                >
                    {t('hero.sub_title')}
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        href="#plans"
                        endIcon={<RocketLaunchIcon />}
                    >
                        צפו בתוכניות
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
