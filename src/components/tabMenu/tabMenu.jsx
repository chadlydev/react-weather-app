import { TabMenuContainer, TabMenuLinks, NavContainer } from './tabMenu.styles';
import { Outlet } from 'react-router-dom';
import { TabLink } from '../../styles/typography';
import MetricSwitcher from '../metricSwitcher/metricSwitcher';

const TabMenu = () => {
    return (
        <TabMenuContainer>
            <NavContainer>
                <TabMenuLinks>
                    <TabLink to='/'>Today</TabLink>
                    <TabLink to='forecast'>Next 5 days</TabLink>
                </TabMenuLinks>
                <MetricSwitcher />
            </NavContainer>

            <div>
                <Outlet />
            </div>
        </TabMenuContainer>
    );
};

export default TabMenu;
