import styled from 'styled-components';

export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.primaryText};
    background-color: ${props => props.theme.primaryButton};
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    border: none;
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
`;

export const RoundButtonActive = styled(RoundButton)`
    background-color: ${props => props.theme.secondaryBackground};
`;
