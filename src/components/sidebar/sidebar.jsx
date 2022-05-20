import {
    SideBarContainer,
    LocationButtonsContainer,
    DateLocationContainer,
    DescContainer,
    LocationContainer,
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
import LocationDot from '../../assets/location-dot';

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
            <DescContainer>
                <PartlyClouds />
                <CloudsBg />
                <SidebarTemp>
                    15<SidebarMetric>°C</SidebarMetric>
                </SidebarTemp>
                <SidebarWeatherDesc>Cloudy</SidebarWeatherDesc>
            </DescContainer>
            <DateLocationContainer>
                <SidebarSubtext>Today - Wed, 18 May</SidebarSubtext>
                <LocationContainer>
                    <LocationDot />
                    <SidebarSubtext>Amsterdam</SidebarSubtext>
                </LocationContainer>
            </DateLocationContainer>
        </SideBarContainer>
    );
};

export default Sidebar;
