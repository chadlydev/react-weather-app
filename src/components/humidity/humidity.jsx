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
    Line,
} from './humidity.styles';

const Humidity = () => {
    return (
        <HighlightsCard>
            <CardTitle>Humidity</CardTitle>
            <HighlightsCardInfo>
                82<HighlightsCardMetric> %</HighlightsCardMetric>
            </HighlightsCardInfo>
            <PercentageLineContainer>
                <PercentageContainer>
                    <Percentage>0</Percentage>
                    <Percentage>50</Percentage>
                    <Percentage>100</Percentage>
                </PercentageContainer>
                <Line />
            </PercentageLineContainer>
        </HighlightsCard>
    );
};

export default Humidity;
