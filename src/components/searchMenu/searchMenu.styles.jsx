import styled from 'styled-components';
import { Flex, FlexColumn, Grid } from '../../styles/globalStyles';
import { SideBarContainer } from '../sideBar/sideBar.styles';

export const SearchMenuContainer = styled(SideBarContainer)`
    width: 100%;
    position: absolute;
    z-index: 2;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;

    /* background-color: #333; */

    @media screen and (min-width: 43rem) {
        height: 70vh;
    }

    @media screen and (min-width: 62rem) {
        max-width: clamp(27.5rem, 30vw, 30rem);
        position: fixed;
        height: 100vh;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
    position: relative;
`;

export const SearchInput = styled.input`
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.primaryText};
    background-color: transparent;
    font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
    padding: 0.5rem 0.75rem;
    border: 1px solid ${props => props.theme.primaryText};
    width: 100%;
`;

export const Wrapper = styled(FlexColumn)`
    gap: 2rem;
    justify-self: flex-start;
    width: 100%;
`;

export const ResultsContainer = styled(Grid)`
    justify-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    width: 100%;
`;

export const SearchIconContainer = styled.div`
    position: absolute;
    left: 0.5rem;
    top: 25%;
    z-index: 2;

    svg {
        width: 80%;
    }
`;

export const BackButtonContainer = styled(Flex)`
    /* position: absolute;
    bottom: 8rem;
    right: 2.375rem; */
    justify-content: flex-end;
    align-items: center;
    /* padding-top: 1rem; */
    width: 100%;
`;
