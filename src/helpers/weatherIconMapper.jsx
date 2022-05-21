import { ReactComponent as Sun } from '../assets/weatherIcons/sun.svg';
import { ReactComponent as Clouds } from '../assets/weatherIcons/clouds.svg';
import { ReactComponent as Drizzle } from '../assets/weatherIcons/partlyClouds.svg';
import { ReactComponent as Rain } from '../assets/weatherIcons/rain.svg';
import { ReactComponent as Snow } from '../assets/weatherIcons/snow.svg';
import { ReactComponent as Fog } from '../assets/weatherIcons/fog.svg';
import { ReactComponent as Haze } from '../assets/weatherIcons/overcast.svg';
import { ReactComponent as Wind } from '../assets/weatherIcons/wind.svg';

const weatherIconMapper = weatherType => {
    switch (weatherType) {
        case 'Clear':
            return <Sun />;
        case 'Clouds':
            return <Clouds />;
        case 'Drizzle':
            return <Drizzle />;
        case 'Rain':
            return <Rain />;
        case 'Snow':
            return <Snow />;
        case 'Haze':
            return <Haze />;
        case 'Mist':
        case 'Smoke':
        case 'Fog':
            return <Fog />;
        default:
            return <Wind />;
    }
};

export default weatherIconMapper;
