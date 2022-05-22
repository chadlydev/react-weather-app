import styled from 'styled-components';

import { FlexColumn } from '../../styles/globalStyles';

export const Card = styled(FlexColumn)`
    background-color: ${props => props.theme.secondaryBackground};
    border-radius: 0.75rem;
    box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.3);
`;
