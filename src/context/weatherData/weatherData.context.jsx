import axios from 'axios';
import { useEffect, useState, useContext, createContext } from 'react';
import { LocationContext } from '../location/location.context';

export const WeatherDataContext = createContext({
    weatherData: {},
});

export const WeatherDataContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({});
    const { location } = useContext(LocationContext);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${process.env.REACT_APP_API_KEY}`
                );
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
            }
        };

        FetchData();
    }, [location]);

    return (
        <WeatherDataContext.Provider value={{ weatherData }}>
            {children}
        </WeatherDataContext.Provider>
    );
};
