import React from 'react'
import IProject from './IProject.interface'
import { Box, styled, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { Link } from 'lucide-react';

const BulltProjectContainer = styled(Box)(({
    display: 'grid',
    gridTemplateColumns: '30px auto',
    padding: 20
}))

const ParagraphProjects = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    fontFamily: 'David',
    fontSize: 18,
    color: theme.palette.info.main
}));

type Props = {
    project: IProject
}
const FirstPartAccordionDetails = (props: Props) => {
    const { project } = props;
    const { t } = useTranslation();

    return (
        <React.Fragment>
            {project.lines.map((l, i) => {
                if (l.name === 'link') {
                    return (
                        <BulltProjectContainer>
                            <Link />
                            <a href={l.opt.url}>{l.opt.url}</a>
                        </BulltProjectContainer>
                    )
                } else {
                    return (
                        <BulltProjectContainer>
                            {l.icon}
                            <ParagraphProjects>{t(`projects.${project.name}.${l.name}`)}</ParagraphProjects>
                        </BulltProjectContainer>
                    )
                }
            })}
        </React.Fragment>
    )
}

export default FirstPartAccordionDetails