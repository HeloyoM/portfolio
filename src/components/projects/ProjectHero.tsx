import { Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import IProject from './IProject.interface'

type Props = {
    expanded: boolean
    project: IProject
}
const ProjectHero = (props: Props) => {
    const { t } = useTranslation();

    return (
        <Card sx={{
            borderRadius: 6,
            backdropFilter: 'blur(10px)',
            boxShadow: props.expanded ? 'none' : '0 8px 24px rgba(0, 0, 0, 0.1)',
            maxWidth: 600,
            width: '100%',
            textAlign: 'center',
            p: 5,
        }}>
            <Typography variant={'h4'} fontWeight={700}>
                {t(`projects.${props.project.name}.name`)}
            </Typography>
            <CardContent>
                <img src={props.project.icon} height={50} width={80} />
            </CardContent>
        </Card>
    )
}

export default ProjectHero