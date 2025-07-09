import { Masonry } from '@mui/lab';
import React, { FC, JSX, ReactNode } from 'react';

type Props = {
    children: JSX.Element | JSX.Element[];
};

const ProjectsContainer: FC<Props> = ({ children }) => {
    return (
        <Masonry
            columns={{ xs: 1, sm: 2, md: 3, lg: 2 }}
            spacing={1}
            sx={{ margin: '1 1' }}
        >
            {children}
        </Masonry>
    );
};

export default ProjectsContainer;
