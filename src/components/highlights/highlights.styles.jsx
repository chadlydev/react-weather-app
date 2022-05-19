import styled from 'styled-components';

import { FlexColumn, Grid } from '../../styles/global.styles';
import { Card } from '../card/card.styles';

export const HighlightsContainer = styled(FlexColumn)`
    gap: 2.25rem;
`;

export const HighlightsGrid = styled(Grid)`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
`;

export const HighlightsCard = styled(Card)`
    height: 13rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;
`;

export const HighlightsCardSm = styled(HighlightsCard)`
    height: 10rem;
    justify-content: flex-start;
`;
