import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import { motion } from 'framer-motion';

const AirPressure = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { main } = weatherData;

    return (
        <HighlightsCardSm
            as={motion.div}
            initial={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 1.7 }}
        >
            <CardTitle>Air pressure</CardTitle>
            <HighlightsCardInfo>
                {main && main.pressure}
                <HighlightsCardMetric> hPa</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default AirPressure;
