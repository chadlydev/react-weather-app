import { TabMenuContainer, TabMenuLinks, NavContainer } from './tabMenu.styles';
import { Outlet } from 'react-router-dom';
import { TabLink } from '../../styles/typography';
import MetricSwitcher from '../metricSwitcher/metricSwitcher';
import { motion } from 'framer-motion';

const TabMenu = () => {
    return (
        <TabMenuContainer
            as={motion.div}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 100, translateY: 0 }}
            transition={{ type: 'spring', duration: 1, stiffness: 50 }}
        >
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
