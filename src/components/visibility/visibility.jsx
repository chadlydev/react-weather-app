import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import { useContext } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import visibilityToKm from '../../helpers/visibilityToKm';

const Visibility = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { visibility } = weatherData;

    return (
        <HighlightsCardSm>
            <CardTitle>Visibility</CardTitle>
            <HighlightsCardInfo>
                {visibility && visibilityToKm(visibility)}
                <HighlightsCardMetric> km</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default Visibility;
