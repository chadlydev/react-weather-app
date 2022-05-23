import styled from 'styled-components';
import { Grid } from '../../styles/globalStyles';
import { SideBarContainer } from '../sideBar/sideBar.styles';

export const SearchMenuContainer = styled(SideBarContainer)`
    z-index: 2;
    position: absolute;
    justify-content: flex-start;
    gap: 2rem;

    @media screen and (min-width: 43rem) {
        height: 70vh;
    }

    @media screen and (min-width: 62rem) {
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

export const ResultsContainer = styled(Grid)`
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
