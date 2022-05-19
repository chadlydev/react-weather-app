import { WindDirectionContainer } from './wind-status.styles';

import { HighlightsCard } from '../highlights/highlights.styles';

import {
    CardTitle,
    HighlightsCardInfo,
    HighlightsCardMetric,
} from '../../styles/typography';

import LocationArrow from '../../assets/location-arrow';

import { RoundButton } from '../../styles/buttons';

const WindStatus = () => {
    return (
        <HighlightsCard>
            <CardTitle>Wind status</CardTitle>
            <HighlightsCardInfo>
                7<HighlightsCardMetric> km/h</HighlightsCardMetric>
            </HighlightsCardInfo>
            <WindDirectionContainer>
                <RoundButton>
                    <LocationArrow />
                </RoundButton>
                <CardTitle>WSW</CardTitle>
            </WindDirectionContainer>
        </HighlightsCard>
    );
};

export default WindStatus;
