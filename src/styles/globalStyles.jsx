import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const Theme = {
    primaryBackground: '#E7E7EB',
    primaryBackgroundHover: '#E7E7EB99',
    secondaryBackground: '#1E213A',
    primaryText: '#E7E7EB',
    secondaryText: '#A09FB1',
    primaryButton: '#6E707A',
    primaryButtonHover: '#6e707a99',
    secondaryButton: '#3C47E9',
    secondaryButtonHover: '#3C47E999',
    borderColor: '#616475',
    yellow: '#FFEC65',
};

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      height: -webkit-fill-available;
    }

    body {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      background-color: ${props => props.theme.primaryBackground};
      color: ${props => props.theme.primaryText};
      height: -webkit-fill-available;
}

a.active {
      color: ${props => props.theme.secondaryBackground};
      font-weight: 700;
      padding-bottom: 1rem;
      border-bottom: 2px solid ${props => props.theme.secondaryBackground};
}

`;

export const Flex = styled.div`
    display: flex;
`;

export const FlexColumn = styled(Flex)`
    flex-direction: column;
`;

export const Grid = styled.div`
    display: grid;
`;
