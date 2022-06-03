import { HighlightsContainer, HighlightsGrid } from './highlights.styles';
import { Title } from '../../styles/typography';
import { motion } from 'framer-motion';

import WindStatus from '../windStatus/windStatus';
import Humidity from '../humidity/humidity';
import Visibility from '../visibility/visibility';
import AirPressure from '../airPressure/airPressure';

const Highlights = () => {
    return (
        <HighlightsContainer>
            <Title
                as={motion.h2}
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 100, translateY: 0 }}
                transition={{ type: 'spring', duration: 1, stiffness: 50 }}
            >
                Today's Highlights
            </Title>
            <HighlightsGrid>
                <WindStatus />
                <Humidity />
            </HighlightsGrid>
            <HighlightsGrid>
                <Visibility />
                <AirPressure />
            </HighlightsGrid>
        </HighlightsContainer>
    );
};

export default Highlights;
