import { useContext } from 'react';
import { TempMetricContext } from '../../context/tempMetric/tempMetric.context';

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
import DisplayTemp from '../../helpers/DisplayTemp';

const WeatherDetails = ({
    timestamp,
    weatherType,
    weatherId,
    tempMax,
    tempMin,
}) => {
    const { fahrenheit } = useContext(TempMetricContext);

    return (
        <TabCard key={timestamp}>
            <CardTitle>{timestamp}</CardTitle>
            <IconContainer>{weatherIconMapper(weatherId)}</IconContainer>
            <WeatherDesc>{weatherType}</WeatherDesc>
            <CardTempContainer>
                <MaxTemp>
                    <DisplayTemp temp={tempMax} />
                    <MaxTempMetric>°{fahrenheit ? 'F' : 'C'}</MaxTempMetric>
                </MaxTemp>

                {tempMin && (
                    <MinTemp>
                        <DisplayTemp temp={tempMin} />
                        <MinTempMetric>°{fahrenheit ? 'F' : 'C'}</MinTempMetric>
                    </MinTemp>
                )}
            </CardTempContainer>
        </TabCard>
    );
};

export default WeatherDetails;
