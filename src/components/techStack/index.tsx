import { Box, styled } from '@mui/material';
import ConceptsList from './concepts';
import TechCard from './TechCard';
import { motion } from 'framer-motion';

const TechStackContainer = styled(Box)(({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}))

const TechStack = () => {
    return (
        <TechStackContainer>

            {ConceptsList.map((c) => (
                <motion.div
                    initial={{ y: -90, opacity: 0 }}
                    whileInView={{ y: 0, x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                ><TechCard item={c} /></motion.div>
            ))}

        </TechStackContainer>

    )
}

export default TechStack;