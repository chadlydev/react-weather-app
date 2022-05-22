import styled from 'styled-components';

import { Card } from '../card/card.styles';
import { Flex, Grid } from '../../styles/globalStyles';

export const IconContainer = styled(Flex)`
    width: 50%;
    svg {
        width: 100%;
        height: 100%;
    }
`;

export const TabCard = styled(Card)`
    min-height: 10.625rem;
    min-width: 7.5rem;
    padding-block: 1.5rem;
    padding-inline: clamp(0.5rem, 1vw + 0.5rem, 3rem);
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const TabContainer = styled(Grid)`
    grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
    grid-gap: 1.75rem;
`;

export const CardTempContainer = styled(Flex)`
    justify-content: center;
    gap: 0.5rem;
    width: 70%;
`;
