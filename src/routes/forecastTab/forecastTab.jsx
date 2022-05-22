import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import WeatherDetails from '../../components/weatherDetails/weatherDetails';
import { TabContainer } from '../../components/weatherDetails/weatherDetails.styles';
import dayToString from '../../helpers/dayToString';

const ForecastTab = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { coord } = weatherData;
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current,hourly&appid=${process.env.REACT_APP_API_KEY}`
                );
                setForecastData(result.data.daily.slice(1, 6));
                console.log(forecastData);
            } catch (e) {
                console.error(e);
            }
        };

        coord && FetchData();
    }, [coord]);

    return (
        <TabContainer>
            {forecastData &&
                forecastData.map(day => {
                    return (
                        <WeatherDetails
                            key={day.dt}
                            timestamp={dayToString(day.dt)}
                            weatherType={day.weather[0].main}
                            tempMax={day.temp.max}
                            tempMin={day.temp.min}
                        />
                    );
                })}
        </TabContainer>
    );
};

export default ForecastTab;
