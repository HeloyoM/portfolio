import { Box, ListItem, ListItemText, styled } from '@mui/material'
import { useTranslation } from 'react-i18next';
import IProject from './IProject.interface';
import React, { useState } from 'react';

const ListItemContainer = styled(Box)(({
    display: 'grid',
    gridTemplateColumns: '30px auto',
    p: 3, alignItems: 'center'
}))

const ListItemTechnologies = styled(ListItemText)(({ }) => ({
    fontSize: '18px',
    fontFamily: 'David',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'text',
        transform: 'translateY(-2px)',
        boxShadow: '0 2px 2px 0 lightgrey',
        backgroundColor: '#e3f2fd'
    },
}))

type Props = {
    project: IProject
}
const ProjectTechList = (props: Props) => {
    const [open, setOpen] = useState(false);
    const { project } = props;
    const { t } = useTranslation();

    return (
        <React.Fragment>

            {project.tech.map((ti, i) => (
                ti.items.map((tv) => (
                    <ListItemContainer>
                        {tv.icon}
                        <ListItemTechnologies>
                            {t(`projects.${project.name}.tech.${ti.name}.${tv.name}`)}
                        </ListItemTechnologies>
                    </ListItemContainer>
                ))
            ))}
        </React.Fragment>

    )
}

export default ProjectTechList