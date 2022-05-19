import { HighlightsCardSm } from '../highlights/highlights.styles';
import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

const Visibility = () => {
    return (
        <HighlightsCardSm>
            <CardTitle>Visibility</CardTitle>
            <HighlightsCardInfo>
                4,1<HighlightsCardMetric> km</HighlightsCardMetric>
            </HighlightsCardInfo>
        </HighlightsCardSm>
    );
};

export default Visibility;
