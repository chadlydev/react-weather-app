import styled from 'styled-components';
import { Flex, FlexColumn } from '../../styles/global.styles';

export const SideBarContainer = styled(FlexColumn)`
    width: 30vw;
    background-color: ${props => props.theme.secondaryBackground};
    padding: 3.375rem;
    align-items: center;
`;

export const LocationButtonsContainer = styled(Flex)`
    width: 100%;
    justify-content: space-between;
`;

export const WeatherIconContainer = styled.div`
    margin-top: 7.625rem;
    position: relative;
`;

export const DescContainer = styled(FlexColumn)`
    margin-top: 1rem;
    align-items: center;
    gap: 0.25rem;
`;

export const BodyContainer = styled(FlexColumn)`
    justify-content: space-between;
    height: 100%;
`;
