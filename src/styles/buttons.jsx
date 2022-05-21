import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.primaryButton};
    font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
    padding: 0.5rem 0.75rem;
    border: none;
    cursor: pointer;
    z-index: 1;
`;

export const SearchButton = styled(Button)`
    background-color: ${props => props.theme.secondaryButton};
`;

export const RoundButton = styled.div`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primaryButton};
    padding: 0.25rem;

    svg {
        width: 36.38px;
        height: 42.14px;
    }

    @media screen and (min-width: 43rem) {
        width: 39.5px;
        height: 39.5px;

        svg {
            width: 200%;
        }
    }
`;

export const RoundButtonActive = styled(RoundButton)`
    background-color: ${props => props.theme.secondaryBackground};
`;
