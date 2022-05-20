import styled from 'styled-components';

import { FlexColumn } from '../../styles/global.styles';

export const Card = styled(FlexColumn)`
    background-color: ${props => props.theme.secondaryBackground};
    border-radius: 0.75rem;
    box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.3);
`;

export const TabCard = styled(Card)`
    min-height: 10.625rem;
    min-width: 7.5rem;
    padding-block: 1.5rem;
    padding-inline: clamp(0.5rem, 1vw + 0.5rem, 3rem);
    justify-content: space-between;
    align-items: center;
`;
