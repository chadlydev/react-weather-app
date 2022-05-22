import { ReactComponent as ClearSky } from '../assets/weatherIcons/clearSky.svg';
import { ReactComponent as FewClouds } from '../assets/weatherIcons/fewClouds.svg';
import { ReactComponent as ScatteredClouds } from '../assets/weatherIcons/scatteredClouds.svg';
import { ReactComponent as BrokenClouds } from '../assets/weatherIcons/brokenClouds.svg';
import { ReactComponent as ShowerRain } from '../assets/weatherIcons/showerRain.svg';
import { ReactComponent as Rain } from '../assets/weatherIcons/rain.svg';
import { ReactComponent as Thunderstorm } from '../assets/weatherIcons/thunderstorm.svg';
import { ReactComponent as Snow } from '../assets/weatherIcons/snow.svg';
import { ReactComponent as Mist } from '../assets/weatherIcons/mist.svg';
import { ReactComponent as Wind } from '../assets/weatherIcons/wind.svg';

const weatherIconMapper = id => {
    switch (true) {
        case id > 199 && id < 233:
            return <Thunderstorm />;
        case id > 299 && id < 322:
        case id > 519 && id < 532:
            return <ShowerRain />;
        case id === 511:
        case id > 599 && id < 623:
            return <Snow />;
        case id > 499 && id < 505:
            return <Rain />;
        case id > 700 && id < 782:
            return <Mist />;
        case id === 800:
            return <ClearSky />;
        case id === 801:
            return <FewClouds />;
        case id === 802:
            return <ScatteredClouds />;
        case id === 803 || id === 804:
            return <BrokenClouds />;
        default:
            return <Wind />;
    }
};

export default weatherIconMapper;
