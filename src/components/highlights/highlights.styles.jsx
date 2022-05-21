import styled from 'styled-components';

import { FlexColumn, Grid } from '../../styles/globalStyles';
import { Card } from '../card/card.styles';

export const HighlightsContainer = styled(FlexColumn)`
    margin-top: 1.125rem;
    gap: 2.25rem;
`;

export const HighlightsGrid = styled(Grid)`
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 3rem;
`;

export const HighlightsCard = styled(Card)`
    height: 13rem;
    padding: 1.5rem 0;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.3);
`;

export const HighlightsCardSm = styled(HighlightsCard)`
    height: 10rem;
    justify-content: flex-start;
`;
