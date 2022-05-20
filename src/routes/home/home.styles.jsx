import styled from 'styled-components';

import { Flex, FlexColumn } from '../../styles/global.styles';

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

    @media screen and (min-width: 62rem) {
        margin-left: clamp(21.25rem, 30vw, 30rem);
        max-width: 100%;
        padding: 2.75rem 8.75rem;
        gap: 4.5rem;
    }
`;
