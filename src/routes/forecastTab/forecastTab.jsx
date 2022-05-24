import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../../context/weatherData/weatherData.context';
import { motion } from 'framer-motion';
import WeatherDetails from '../../components/weatherDetails/weatherDetails';
import {
    TabContainer,
    LoadingContainer,
} from '../../components/weatherDetails/weatherDetails.styles';
import dayToString from '../../helpers/dayToString';
import { LoadingText } from '../../styles/typography';

const ForecastTab = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const { coord } = weatherData;
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const FetchData = async () => {
            console.log(loading);
            try {
                const result = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current,hourly&appid=${process.env.REACT_APP_API_KEY}`
                );
                setForecastData(result.data.daily.slice(1, 6));
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
                forecastData.map((day, i) => {
                    return (
                        <motion.div
                            key={day.dt}
                            initial={{
                                opacity: 0,
                                translateX: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.1 }}
                        >
                            <WeatherDetails
                                timestamp={dayToString(day.dt)}
                                weatherType={day.weather[0].main}
                                weatherId={day.weather[0].id}
                                tempMax={day.temp.max}
                                tempMin={day.temp.min}
                            />
                        </motion.div>
                    );
                })}
        </TabContainer>
    );
};

export default ForecastTab;
