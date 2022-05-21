import styled from 'styled-components';

import { Flex, FlexColumn } from '../../styles/globalStyles';

export const HomeContainer = styled(Flex)`
    flex-direction: column;
    overflow: hidden;
    @media screen and (min-width: 62rem) {
        min-height: 100vh;
    }
`;

export const MainContainer = styled(FlexColumn)`
    padding: 2.75rem;
    gap: 2.75rem;
    background-color: ${props => props.theme.primaryBackground};
    z-index: 3;

    @media screen and (min-width: 62rem) {
        margin-left: clamp(27.5rem, 30vw, 30rem);
        max-width: 100%;
        padding-block: 2.75rem;
        padding-inline: clamp(2.75rem, 3vw + 2.75rem, 8.75rem);
        gap: 4.5rem;
    }
`;
