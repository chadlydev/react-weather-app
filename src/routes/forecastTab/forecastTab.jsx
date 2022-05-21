import {
    CardTitle,
    MaxTemp,
    MaxTempMetric,
    MinTemp,
    MinTempMetric,
} from '../../styles/typography';

import { IconContainer } from './forecastTab.styles';

import { TabCard } from '../../components/card/card.styles';
import { CardTempContainer, TabContainer } from '../../styles/globalStyles';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';

import dayToString from '../../helpers/dayToString';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';
import weatherIconMapper from '../../helpers/weatherIconMapper';

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
                        <TabCard key={day.dt}>
                            <CardTitle>{dayToString(day.dt)}</CardTitle>
                            <IconContainer>
                                {weatherIconMapper(day.weather[0].main)}
                            </IconContainer>
                            <CardTempContainer>
                                <MaxTemp>
                                    {kelvinToCelsius(day.temp.max)}
                                    <MaxTempMetric>°C</MaxTempMetric>
                                </MaxTemp>
                                <MinTemp>
                                    {kelvinToCelsius(day.temp.min)}
                                    <MinTempMetric>°C</MinTempMetric>
                                </MinTemp>
                            </CardTempContainer>
                        </TabCard>
                    );
                })}
        </TabContainer>
    );
};

export default ForecastTab;
