import { HighlightsCard } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
    Percentage,
} from '../../styles/typography';

import {
    PercentageLineContainer,
    PercentageContainer,
} from './humidity.styles';

import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import ProgressBar from '../progressBar/ProgressBar';

import { motion } from 'framer-motion';

const Humidity = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { main } = weatherData;

    return (
        <HighlightsCard
            as={motion.div}
            initial={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 1.5 }}
        >
            <CardTitle>Humidity</CardTitle>
            <HighlightsCardInfo>
                {main && main.humidity}
                <HighlightsCardMetric> %</HighlightsCardMetric>
            </HighlightsCardInfo>
            <PercentageLineContainer>
                <PercentageContainer>
                    <Percentage>0</Percentage>
                    <Percentage>50</Percentage>
                    <Percentage>100</Percentage>
                </PercentageContainer>
                <ProgressBar value={main && main.humidity} />
            </PercentageLineContainer>
        </HighlightsCard>
    );
};

export default Humidity;
