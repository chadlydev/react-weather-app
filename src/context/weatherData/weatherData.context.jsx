import axios from 'axios';
import { useEffect, useState, useContext, createContext } from 'react';
import { LocationContext } from '../location/location.context';
import { GeoLocationContext } from '../geoLocation/geoLocation.context';

export const WeatherDataContext = createContext({
    weatherData: {},
});

export const WeatherDataContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({});
    const { location } = useContext(LocationContext);
    const { geoLocation } = useContext(GeoLocationContext);
    const { latitude, longitude } = geoLocation;

    useEffect(() => {
        const FetchData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
                );
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
            }
        };

        location && FetchData();
    }, [location]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
                );
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
            }
        };

        latitude && FetchData();
    }, [geoLocation]);

    return (
        <WeatherDataContext.Provider value={{ weatherData }}>
            {children}
        </WeatherDataContext.Provider>
    );
};
