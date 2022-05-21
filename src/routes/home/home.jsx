import { HomeContainer, MainContainer } from './home.styles';
import Sidebar from '../../components/sideBar/sideBar';
import TabMenu from '../../components/tabMenu/tabMenu';
import Highlights from '../../components/highlights/highlights';
import SearchMenu from '../../components/searchMenu/searchMenu';

import { useContext } from 'react';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';

const Home = () => {
    const { searchMenu } = useContext(SearchMenuContext);

    return (
        <HomeContainer>
            {searchMenu && <SearchMenu />}
            <Sidebar />
            <MainContainer>
                <TabMenu />
                <Highlights />
            </MainContainer>
        </HomeContainer>
    );
};

export default Home;
