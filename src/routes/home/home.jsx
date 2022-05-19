import { HomeContainer, MainContainer } from './home.styles';
import Sidebar from '../../components/sidebar/sidebar';
import MetricSwitcher from '../../components/metric-switcher/metric-switcher';
import TabMenu from '../../components/tab-menu/tab-menu';
import Highlights from '../../components/highlights/highlights';

const Home = () => {
    return (
        <HomeContainer>
            <Sidebar />
            <MainContainer>
                <MetricSwitcher />
                <TabMenu />
                <Highlights />
            </MainContainer>
        </HomeContainer>
    );
};

export default Home;
