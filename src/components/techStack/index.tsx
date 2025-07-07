import { Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ConceptsList from './concepts';
import TechCard from './TechCard';

const TechStackContainer = styled(Box)(({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}))

const TechStack = () => {
    return (
        <TechStackContainer>

            {ConceptsList.map((c) => (
                <TechCard item={c} />
            ))}

        </TechStackContainer>

    )
}

export default TechStack;