import styled from 'styled-components';

import { Flex, FlexColumn } from '../../styles/global.styles';

export const TabMenuContainer = styled(FlexColumn)`
    gap: 2.25rem;
`;

export const TabMenuLinks = styled(Flex)`
    gap: clamp(1rem, 1vw + 1rem, 2rem);
`;

export const NavContainer = styled(Flex)`
    align-items: center;
    justify-content: space-between;
`;
