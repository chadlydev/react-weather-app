import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const Theme = {
    primaryBackground: '#E7E7EB',
    secondaryBackground: '#1E213A',
    primaryText: '#E7E7EB',
    secondaryText: '#A09FB1',
    primaryButton: '#6E707A',
    secondaryButton: '#3C47E9',
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
      color: ${props => props.theme.primaryText};
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

export const TabContainer = styled(Grid)`
    grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
    grid-gap: 1.75rem;
`;

export const CardTempContainer = styled(Flex)`
    justify-content: space-between;
    gap: 0.5rem;
    width: 70%;
`;
