import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import { motion } from 'framer-motion';

import {
    TabContainer,
    LoadingContainer,
} from '../../components/weatherDetails/weatherDetails.styles';
import { LoadingText } from '../../styles/typography';
import WeatherDetails from '../../components/weatherDetails/weatherDetails';
import timeToString from '../../helpers/timeToString';

const TodayTab = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { coord } = weatherData;
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

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
            setLoading(false);
        };

        coord && FetchData();
    }, [coord]);

    return (
        <TabContainer>
            {loading && (
                <LoadingContainer>
                    <LoadingText>Loading data...</LoadingText>
                </LoadingContainer>
            )}
            {!loading &&
                forecastData.map((hour, i) => {
                    return (
                        <motion.div
                            key={hour.dt}
                            initial={{
                                opacity: 0,
                                translateX: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.1 }}
                        >
                            <WeatherDetails
                                timestamp={timeToString(hour.dt)}
                                weatherType={hour.weather[0].main}
                                weatherId={hour.weather[0].id}
                                tempMax={hour.temp}
                            />
                        </motion.div>
                    );
                })}
        </TabContainer>
    );
};

export default TodayTab;
