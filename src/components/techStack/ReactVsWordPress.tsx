import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import ReactLogo from '../../assets/react_logo.png';
import WordPressLogo from '../../assets/wordpress.png';
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ReactVsWordPress = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="325"
                        width={150}
                        image={WordPressLogo}
                        alt="react logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {t('benefits.offer.wordpress_card.title')}
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                            <CircleIcon sx={{ width: 15, height: 15 }} />
                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                {t('benefits.offer.wordpress_card.line_1')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                            <CircleIcon sx={{ width: 15, height: 15 }} />
                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                {t('benefits.offer.wordpress_card.line_2')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                            <CircleIcon sx={{ width: 15, height: 15 }} />
                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                {t('benefits.offer.wordpress_card.line_3')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                            <CircleIcon sx={{ width: 15, height: 15 }} />
                            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                {t('benefits.offer.wordpress_card.line_4')}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Paper sx={{ backgroundColor: 'cornflowerblue', p: 3 }}>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="325"
                            image={ReactLogo}
                            alt="green iguana"
                        />
                        <CardContent>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Full development of a web application
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <CircleIcon sx={{ width: 15, height: 15 }} />
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_1')}</Typography>
                                </Box>
                            </motion.div>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            ><Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <CircleIcon sx={{ width: 15, height: 15 }} />
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_2')}</Typography>
                                </Box>
                            </motion.div>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            ><Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <CircleIcon sx={{ width: 15, height: 15 }} />
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_3')}</Typography>
                                </Box>
                            </motion.div>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: true }}
                            ><Box sx={{ display: 'grid', gridTemplateColumns: '30px auto', p: 3, alignItems: 'center' }}>
                                    <CircleIcon sx={{ width: 15, height: 15 }} />
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>{t('benefits.offer.react_card.line_4')}</Typography>
                                </Box>
                            </motion.div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </Box>
    )
}

export default ReactVsWordPress