import ThunderRain from '../../assets/weather-icons/thunderstorm-showers';
import Sun from '../../assets/weather-icons/sun';
import Cloud from '../../assets/weather-icons/cloud';
import Wind from '../../assets/weather-icons/wind';

import {
    CardTitle,
    MaxTemp,
    MaxTempMetric,
    MinTemp,
    MinTempMetric,
} from '../../styles/typography';

import { TabCard } from '../../components/card/card.styles';
import { CardTempContainer, TabContainer } from '../../styles/global.styles';

const ForecastTab = () => {
    return (
        <TabContainer>
            <TabCard>
                <CardTitle>Tomorrow</CardTitle>
                <ThunderRain />

                <CardTempContainer>
                    <MaxTemp>
                        16<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        11<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>
            <TabCard>
                <CardTitle>Thursday</CardTitle>
                <Sun />
                <CardTempContainer>
                    <MaxTemp>
                        20<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        14<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>

            <TabCard>
                <CardTitle>Friday</CardTitle>
                <Cloud />
                <CardTempContainer>
                    <MaxTemp>
                        18<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        13<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>

            <TabCard>
                <CardTitle>Saturday</CardTitle>
                <Cloud />
                <CardTempContainer>
                    <MaxTemp>
                        17<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        13<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>

            <TabCard>
                <CardTitle>Sunday</CardTitle>
                <Wind />
                <CardTempContainer>
                    <MaxTemp>
                        22<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        16<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>
        </TabContainer>
    );
};

export default ForecastTab;
