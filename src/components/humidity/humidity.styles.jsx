import styled from 'styled-components';

import { FlexColumn, Flex } from '../../styles/globalStyles';

export const PercentageLineContainer = styled(FlexColumn)`
    align-items: center;
    width: 80%;
    gap: 2px;
`;

export const PercentageContainer = styled(Flex)`
    width: 100%;
    justify-content: space-between;
`;

export const Line = styled.div`
    height: 10px;
    background-color: ${props => props.theme.primaryText};
    border-radius: 1rem;
    width: 100%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        height: 10px;
        background-color: ${props => props.theme.yellow};
        border-radius: 1rem;
        width: 82%;
    }
`;
