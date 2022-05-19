import { HighlightsContainer, HighlightsGrid } from './highlights.styles';
import { Title } from '../../styles/typography';

import WindStatus from '../wind-status/wind-status';
import Humidity from '../humidity/humidity';
import Visibility from '../visibility/visibility';
import AirPressure from '../air-pressure/air-pressure';

const Highlights = () => {
    return (
        <HighlightsContainer>
            <Title>Today's Highlights</Title>
            <HighlightsGrid>
                <WindStatus />
                <Humidity />
                <Visibility />
                <AirPressure />
            </HighlightsGrid>
        </HighlightsContainer>
    );
};

export default Highlights;
