import { HighlightsContainer, HighlightsGrid } from './highlights.styles';
import { Title } from '../../styles/typography';

import WindStatus from '../windStatus/windStatus';
import Humidity from '../humidity/humidity';
import Visibility from '../visibility/visibility';
import AirPressure from '../airPressure/airPressure';

const Highlights = () => {
    return (
        <HighlightsContainer>
            <Title>Today's Highlights</Title>
            <HighlightsGrid>
                <WindStatus />
                <Humidity />
            </HighlightsGrid>
            <HighlightsGrid>
                <Visibility />
                <AirPressure />
            </HighlightsGrid>
        </HighlightsContainer>
    );
};

export default Highlights;
