import { useContext, useEffect } from 'react';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import { GeoLocationContext } from '../../context/geoLocation/geoLocation.context';

import {
    SideBarContainer,
    LocationButtonsContainer,
    DateLocationContainer,
    DescContainer,
    LocationContainer,
} from './sideBar.styles';

import { ReactComponent as CurrentLocation } from '../../assets/currentLocation.svg';
import {
    SidebarTemp,
    SidebarMetric,
    SidebarWeatherDesc,
    SidebarSubtext,
} from '../../styles/typography';

import { CloudsBg } from '../../assets/cloudsBg';
import { ReactComponent as LocationDot } from '../../assets/locationDot.svg';

import { Button, RoundButton } from '../../styles/buttons';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';
import weatherIconMapper from '../../helpers/weatherIconMapper';
import dateToString from '../../helpers/dateToString';

const Sidebar = () => {
    const { toggle } = useContext(SearchMenuContext);
    const { weatherData } = useContext(WeatherDataContext);
    const { weather, main, name } = weatherData;
    const { set } = useContext(GeoLocationContext);

    const myIP = location => {
        const { latitude, longitude } = location.coords;
        set(latitude, longitude);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(myIP);
    }, []);

    return (
        <SideBarContainer>
            <LocationButtonsContainer>
                <Button type='button' onClick={toggle}>
                    Change location
                </Button>
                <RoundButton
                    onClick={() =>
                        navigator.geolocation.getCurrentPosition(myIP)
                    }
                >
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
                <SidebarSubtext>{dateToString()}</SidebarSubtext>
                <LocationContainer>
                    <LocationDot />
                    <SidebarSubtext>{name}</SidebarSubtext>
                </LocationContainer>
            </DateLocationContainer>
        </SideBarContainer>
    );
};

export default Sidebar;
