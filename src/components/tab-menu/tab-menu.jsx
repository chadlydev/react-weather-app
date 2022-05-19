import { TabMenuContainer, TabMenuLinks } from './tab-menu.styles';
import { Outlet } from 'react-router-dom';
import { TabLink } from '../../styles/typography';

const TabMenu = () => {
    return (
        <TabMenuContainer>
            <TabMenuLinks>
                <TabLink to='/'>Today</TabLink>
                <TabLink to='forecast'>Next 5 days</TabLink>
            </TabMenuLinks>
            <div>
                <Outlet />
            </div>
        </TabMenuContainer>
    );
};

export default TabMenu;
