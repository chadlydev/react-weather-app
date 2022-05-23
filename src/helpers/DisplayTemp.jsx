import { useContext } from 'react';
import { TempMetricContext } from '../context/tempMetric/tempMetric.context';
import kelvinToCelsius from './kelvinToCelsius';
import kelvinToFahrenheit from './kelvinToFahrenheit';

const DisplayTemp = ({ temp }) => {
    const { fahrenheit } = useContext(TempMetricContext);

    if (fahrenheit) {
        return kelvinToFahrenheit(temp);
    } else {
        return kelvinToCelsius(temp);
    }
};

export default DisplayTemp;
