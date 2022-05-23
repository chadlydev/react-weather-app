import { useContext, useEffect } from 'react';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import { GeoLocationContext } from '../../context/geoLocation/geoLocation.context';
import { TempMetricContext } from '../../context/tempMetric/tempMetric.context';

import {
    SideBarContainer,
    LocationButtonsContainer,
    DateLocationContainer,
    DescContainer,
    LocationContainer,
} from './sideBar.styles';

import {
    SidebarTemp,
    SidebarMetric,
    SidebarWeatherDesc,
    SidebarSubtext,
} from '../../styles/typography';

import { CloudsBg } from '../../assets/cloudsBg';
import { ReactComponent as CurrentLocation } from '../../assets/currentLocation.svg';
import { ReactComponent as LocationDot } from '../../assets/locationDot.svg';
import { Button, RoundButton } from '../../styles/buttons';

import weatherIconMapper from '../../helpers/weatherIconMapper';
import dateToString from '../../helpers/dateToString';
import DisplayTemp from '../../helpers/displayTemp';

const SideBar = () => {
    const { toggle } = useContext(SearchMenuContext);
    const { set } = useContext(GeoLocationContext);
    const { fahrenheit } = useContext(TempMetricContext);
    const {
        weatherData: { weather, main, name },
    } = useContext(WeatherDataContext);

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
                {weather && weatherIconMapper(weather[0].id)}
                <CloudsBg />
                <SidebarTemp>
                    {weather && <DisplayTemp temp={main.temp} />}
                    <SidebarMetric>°{fahrenheit ? 'F' : 'C'}</SidebarMetric>
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

export default SideBar;
