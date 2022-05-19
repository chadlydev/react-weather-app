import styled from 'styled-components';

import { FlexColumn } from '../../styles/global.styles';

export const Card = styled(FlexColumn)`
    background-color: ${props => props.theme.secondaryBackground};
    border-radius: 0.75rem;
`;

export const TabCard = styled(Card)`
    height: 10.625rem;
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
`;
