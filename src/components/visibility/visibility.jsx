import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import visibilityToKm from '../../helpers/visibilityToKm';

import { motion } from 'framer-motion';

const Visibility = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { visibility } = weatherData;

    return (
        <HighlightsCardSm
            as={motion.div}
            initial={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 1.6 }}
        >
            <CardTitle>Visibility</CardTitle>
            <HighlightsCardInfo>
                {visibility && visibilityToKm(visibility)}
                <HighlightsCardMetric> km</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default Visibility;
