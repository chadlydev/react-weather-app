import { GlobalStyle, Theme } from './styles/global-styles';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const AppContainer = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: ${props => props.theme.secondaryBackground};
`;

const Right = styled.div`
    width: 70vw;
`;

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <AppContainer>
                <Left>
                    <button type='button'>Change location</button>
                    <button type='button'>$</button>
                </Left>
                <Right></Right>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
