import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import windSpeedToKm from '../../helpers/windSpeedToKm';
import windDirectionIconMapper from '../../helpers/windDirectionIconMapper';
import windDirectionMapper from '../../helpers/windDirectionMapper';

import { WindDirectionContainer } from './windStatus.styles';

import { HighlightsCard } from '../highlights/highlights.styles';

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
        <HighlightsCard>
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
