import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import windSpeedToKm from '../../helpers/windSpeedToKm';
import windDirectionIconMapper from '../../helpers/windDirectionIconMapper';
import windDirectionMapper from '../../helpers/windDirectionMapper';

import { WindDirectionContainer } from './windStatus.styles';

import { HighlightsCard } from '../highlights/highlights.styles';

import { motion } from 'framer-motion';

import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import { RoundButton } from '../../styles/buttons';

const WindStatus = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { wind } = weatherData;

    return (
        <HighlightsCard
            as={motion.div}
            initial={{
                opacity: 0,
                translateX: -50,
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 1.4 }}
        >
            <CardTitle>Wind status</CardTitle>
            <HighlightsCardInfo>
                {wind && windSpeedToKm(wind.speed)}
                <HighlightsCardMetric> km/h</HighlightsCardMetric>
            </HighlightsCardInfo>
            <WindDirectionContainer>
                <RoundButton>
                    {wind && windDirectionIconMapper(wind.deg)}
                </RoundButton>
                <CardTitle>{wind && windDirectionMapper(wind.deg)}</CardTitle>
            </WindDirectionContainer>
        </HighlightsCard>
    );
};

export default WindStatus;
