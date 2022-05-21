import { useContext } from 'react';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import {
    SideBarContainer,
    LocationButtonsContainer,
    DateLocationContainer,
    DescContainer,
    LocationContainer,
} from './sideBar.styles';

import CurrentLocation from '../../assets/currentLocation';
import {
    SidebarTemp,
    SidebarMetric,
    SidebarWeatherDesc,
    SidebarSubtext,
} from '../../styles/typography';

import { CloudsBg } from '../../assets/cloudsBg';
import LocationDot from '../../assets/locationDot';

import { Button, RoundButton } from '../../styles/buttons';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';
import dayToString from '../../helpers/dayToString';
import weatherIconMapper from '../../helpers/weatherIconMapper';
import dateToString from '../../helpers/dateToString';

const Sidebar = () => {
    const { toggle } = useContext(SearchMenuContext);
    const { weatherData } = useContext(WeatherDataContext);
    const { weather, main, name, dt } = weatherData;

    return (
        <SideBarContainer>
            <LocationButtonsContainer>
                <Button type='button' onClick={toggle}>
                    Change location
                </Button>
                <RoundButton>
                    <CurrentLocation />
                </RoundButton>
            </LocationButtonsContainer>
            <DescContainer>
                {weather && weatherIconMapper(weather[0].main)}
                <CloudsBg />
                <SidebarTemp>
                    {weather && kelvinToCelsius(main.temp)}
                    <SidebarMetric>°C</SidebarMetric>
                </SidebarTemp>
                <SidebarWeatherDesc>
                    {weather && weather[0].main}
                </SidebarWeatherDesc>
            </DescContainer>
            <DateLocationContainer>
                <SidebarSubtext>
                    {dayToString(dt)} - {dateToString()}
                </SidebarSubtext>
                <LocationContainer>
                    <LocationDot />
                    <SidebarSubtext>{name}</SidebarSubtext>
                </LocationContainer>
            </DateLocationContainer>
        </SideBarContainer>
    );
};

export default Sidebar;
