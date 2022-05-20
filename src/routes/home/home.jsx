import { HomeContainer, MainContainer } from './home.styles';
import Sidebar from '../../components/sidebar/sidebar';
import MetricSwitcher from '../../components/metric-switcher/metric-switcher';
import TabMenu from '../../components/tab-menu/tab-menu';
import Highlights from '../../components/highlights/highlights';
import SearchMenu from '../../components/search-menu/search-menu';

const Home = () => {
    return (
        <HomeContainer>
            <SearchMenu />
            <Sidebar />
            <MainContainer>
                <TabMenu />
                <Highlights />
            </MainContainer>
        </HomeContainer>
    );
};

export default Home;
