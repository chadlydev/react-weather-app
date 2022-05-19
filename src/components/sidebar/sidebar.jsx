import {
    SideBarContainer,
    LocationButtonsContainer,
    WeatherIconContainer,
    BodyContainer,
    DescContainer,
} from './sidebar.styles';
import PartlyClouds from '../../assets/weather-icons/partly-clouds';
import CurrentLocation from '../../assets/current-location';
import {
    SidebarTemp,
    SidebarMetric,
    SidebarWeatherDesc,
    SidebarSubtext,
} from '../../styles/typography';

import { CloudsBg } from '../../assets/clouds-bg';

import { Button, RoundButton } from '../../styles/buttons';

const Sidebar = () => {
    return (
        <SideBarContainer>
            <LocationButtonsContainer>
                <Button type='button'>Change location</Button>
                <RoundButton>
                    <CurrentLocation />
                </RoundButton>
            </LocationButtonsContainer>
            <WeatherIconContainer>
                <PartlyClouds />
                <CloudsBg />
            </WeatherIconContainer>
            <SidebarTemp>
                15<SidebarMetric>°C</SidebarMetric>
            </SidebarTemp>
            <BodyContainer>
                <DescContainer>
                    <SidebarWeatherDesc>Cloudy</SidebarWeatherDesc>
                    <SidebarSubtext>Amsterdam</SidebarSubtext>
                </DescContainer>
                <SidebarSubtext>Today - Web, 18 May</SidebarSubtext>
            </BodyContainer>
        </SideBarContainer>
    );
};

export default Sidebar;
