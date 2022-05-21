import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

const AirPressure = () => {
    return (
        <HighlightsCardSm>
            <CardTitle>Air pressure</CardTitle>
            <HighlightsCardInfo>
                992<HighlightsCardMetric> mb</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default AirPressure;
