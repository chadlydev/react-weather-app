import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

const AirPressure = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { main } = weatherData;

    return (
        <HighlightsCardSm>
            <CardTitle>Air pressure</CardTitle>
            <HighlightsCardInfo>
                {main && main.pressure}
                <HighlightsCardMetric> hPa</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default AirPressure;
