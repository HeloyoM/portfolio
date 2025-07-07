import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ITech } from './ITech.interface'

type Props = {
    item: ITech
}
const TechCard = ({ item }: Props) => {
    const { t } = useTranslation();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {t(`benefits.${item.name}.name`)}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {t(`benefits.${item.name}.line_1`)}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {t(`benefits.${item.name}.line_2`)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TechCard