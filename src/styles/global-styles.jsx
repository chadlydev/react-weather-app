import { createGlobalStyle } from 'styled-components';

export const Theme = {
    primaryBackground: '#E7E7EB',
    secondaryBackground: '#1E213A',
    primaryText: '#E7E7EB',
    secondaryText: '#A09FB1',
    primaryButtonColor: '#6E707A',
    secondaryButtonColor: '#3C47E9',
    borderColor: '#616475',
    yellow: '#FFEC65',
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      background-color: ${props => props.theme.primaryBackground};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

button {
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.primaryButtonColor};
  font-size: 1.25rem;
  padding: 0.5rem 0.75rem;
}
`;
