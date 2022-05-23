import styled from 'styled-components';
import { Flex, FlexColumn } from '../../styles/globalStyles';

export const SideBarContainer = styled(FlexColumn)`
    min-width: 100vw;
    background-color: ${props => props.theme.secondaryBackground};
    padding: 2.375rem;
    height: 100vh;
    max-height: -webkit-fill-available;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 43rem) {
        min-height: 70vh;
    }

    @media screen and (min-width: 62rem) {
        min-width: clamp(27.5rem, 30vw, 30rem);
        padding: 2.75rem;
        position: fixed;
        justify-content: space-between;
        min-height: 100%;
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
    gap: 2rem;
    @media screen and (min-width: 43rem) {
        margin-top: 6rem;
    }
`;

export const LocationContainer = styled(Flex)`
    gap: 1rem;
    align-items: center;
`;
