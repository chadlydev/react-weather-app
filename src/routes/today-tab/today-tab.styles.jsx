import styled from 'styled-components';

export const TodayContainer = styled.div`
    height: 10.625rem;
    padding: 2.125rem 1.5rem;
    background-color: ${props => props.theme.secondaryBackground};
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const TimeStampContainer = styled.div`
    display: flex;
    gap: 0;
`;

export const TimeStamp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;

export const Line = styled.div`
    height: 4px;
    background-color: ${props => props.theme.primaryText};
    border-radius: 1rem;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Temp = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const TempSm = styled(Temp)`
    font-size: 1rem;
`;

export const TimeContainer = styled.div`
    display: flex;
`;

export const Time = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.secondaryText};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
