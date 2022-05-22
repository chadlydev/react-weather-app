import {
    CardTitle,
    WeatherDesc,
    MaxTemp,
    MaxTempMetric,
    MinTemp,
    MinTempMetric,
} from '../../styles/typography';

import {
    IconContainer,
    TabCard,
    CardTempContainer,
} from './weatherDetails.styles';

import weatherIconMapper from '../../helpers/weatherIconMapper';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';

const WeatherDetails = ({ timestamp, weatherType, tempMax, tempMin }) => {
    return (
        <TabCard key={timestamp}>
            <CardTitle>{timestamp}</CardTitle>
            <IconContainer>{weatherIconMapper(weatherType)}</IconContainer>
            <WeatherDesc>{weatherType}</WeatherDesc>
            <CardTempContainer>
                <MaxTemp>
                    {kelvinToCelsius(tempMax)}
                    <MaxTempMetric>°C</MaxTempMetric>
                </MaxTemp>

                {tempMin && (
                    <MinTemp>
                        {kelvinToCelsius(tempMin)}
                        <MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                )}
            </CardTempContainer>
        </TabCard>
    );
};

export default WeatherDetails;
