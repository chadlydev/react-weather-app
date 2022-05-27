import styled from 'styled-components';
import { Flex, FlexColumn } from '../../styles/globalStyles';

export const SideBarContainer = styled(FlexColumn)`
    max-width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.secondaryBackground};
    padding: 2.375rem;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 43rem) {
        height: 70vh;
    }

    @media screen and (min-width: 62rem) {
        height: 100vh;
        min-width: clamp(27.5rem, 30vw, 30rem);
        padding: 2.75rem;
        position: fixed;
    }
`;

export const LocationButtonsContainer = styled(Flex)`
    min-width: 100%;
    justify-content: space-between;
`;

export const DescContainer = styled(FlexColumn)`
    align-items: center;

    svg {
        width: clamp(75%, 70vw, 100%);
        height: clamp(75%, 50vw, 100%);
        margin-bottom: -1rem;
    }

    @media screen and (min-width: 43rem) {
        svg {
            margin-top: 2rem;
            width: 120%;
        }
    }
`;

export const DateLocationContainer = styled(FlexColumn)`
    align-items: center;
    gap: 1.5rem;
    @media screen and (min-width: 43rem) {
        margin-top: 2rem;
    }
`;

export const LocationContainer = styled(Flex)`
    gap: 1rem;
    align-items: center;
`;
