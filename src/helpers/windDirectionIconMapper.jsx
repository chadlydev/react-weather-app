import { ReactComponent as N } from '../assets/windDirections/N.svg';
import { ReactComponent as NNE } from '../assets/windDirections/NNE.svg';
import { ReactComponent as NE } from '../assets/windDirections/NE.svg';
import { ReactComponent as ENE } from '../assets/windDirections/ENE.svg';
import { ReactComponent as E } from '../assets/windDirections/E.svg';
import { ReactComponent as ESE } from '../assets/windDirections/ESE.svg';
import { ReactComponent as SE } from '../assets/windDirections/SE.svg';
import { ReactComponent as SSE } from '../assets/windDirections/SSE.svg';
import { ReactComponent as S } from '../assets/windDirections/S.svg';
import { ReactComponent as SSW } from '../assets/windDirections/SSW.svg';
import { ReactComponent as SW } from '../assets/windDirections/SW.svg';
import { ReactComponent as WSW } from '../assets/windDirections/WSW.svg';
import { ReactComponent as W } from '../assets/windDirections/W.svg';
import { ReactComponent as WNW } from '../assets/windDirections/WNW.svg';
import { ReactComponent as NW } from '../assets/windDirections/NW.svg';
import { ReactComponent as NNW } from '../assets/windDirections/NNW.svg';

const windDirectionIconMapper = deg => {
    switch (true) {
        case deg >= 348.75 && deg <= 11.24:
            return <N />;
        case deg >= 11.25 && deg <= 33.74:
            return <NNE />;
        case deg >= 33.75 && deg <= 56.24:
            return <NE />;
        case deg >= 56.25 && deg <= 78.74:
            return <ENE />;
        case deg >= 78.75 && deg <= 101.24:
            return <E />;
        case deg >= 101.25 && deg <= 123.74:
            return <ESE />;
        case deg >= 123.75 && deg <= 146.24:
            return <SE />;
        case deg >= 146.25 && deg <= 168.74:
            return <SSE />;
        case deg >= 168.75 && deg <= 191.24:
            return <S />;
        case deg >= 191.25 && deg <= 213.74:
            return <SSW />;
        case deg >= 213.75 && deg <= 236.24:
            return <SW />;
        case deg >= 236.25 && deg <= 258.74:
            return <WSW />;
        case deg >= 258.75 && deg <= 281.24:
            return <W />;
        case deg >= 281.25 && deg <= 303.74:
            return <WNW />;
        case deg >= 303.75 && deg <= 326.24:
            return <NW />;
        case deg >= 326.25 && deg <= 348.74:
            return <NNW />;
        default:
            return <N />;
    }
};

export default windDirectionIconMapper;
