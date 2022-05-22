import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import { TabContainer } from '../../components/weatherDetails/weatherDetails.styles';

import WeatherDetails from '../../components/weatherDetails/weatherDetails';
import timeToString from '../../helpers/timeToString';

const TodayTab = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { coord } = weatherData;
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current,daily&appid=${process.env.REACT_APP_API_KEY}`
                );
                setForecastData([
                    result.data.hourly[3],
                    result.data.hourly[5],
                    result.data.hourly[7],
                    result.data.hourly[9],
                    result.data.hourly[11],
                ]);
            } catch (e) {
                console.error(e);
            }
        };

        coord && FetchData();
    }, [coord]);

    return (
        <TabContainer>
            {forecastData &&
                forecastData.map(hour => {
                    return (
                        <WeatherDetails
                            key={hour.dt}
                            timestamp={timeToString(hour.dt)}
                            weatherType={hour.weather[0].main}
                            weatherId={hour.weather[0].id}
                            tempMax={hour.temp}
                        />
                    );
                })}
        </TabContainer>
    );
};

export default TodayTab;
