import Sun from '../../assets/weatherIcons/sun';
import Cloud from '../../assets/weatherIcons/cloud';
import Wind from '../../assets/weatherIcons/wind';

import { TabContainer, CardTempContainer } from '../../styles/globalStyles';
import { TabCard } from '../../components/card/card.styles';
import { CardTitle } from '../../styles/typography';
import {
    MaxTemp,
    MaxTempMetric,
    MinTemp,
    MinTempMetric,
} from '../../styles/typography';

const TodayTab = () => {
    return (
        <TabContainer>
            <TabCard>
                <CardTitle>08:00</CardTitle>
                <Sun />
                <CardTempContainer>
                    <MaxTemp>
                        16<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        12<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>
            <TabCard>
                <CardTitle>10:00</CardTitle>
                <Cloud />
                <CardTempContainer>
                    <MaxTemp>
                        18<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        14<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>

            <TabCard>
                <CardTitle>12:00</CardTitle>
                <Sun />
                <CardTempContainer>
                    <MaxTemp>
                        19<MaxTempMetric>°C</MaxTempMetric>
                    </MaxTemp>
                    <MinTemp>
                        14<MinTempMetric>°C</MinTempMetric>
                    </MinTemp>
                </CardTempContainer>
            </TabCard>

            <TabCard>
                <CardTitle>14:00</CardTitle>
                <Wind />
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
                <CardTitle>16:00</CardTitle>
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

export default TodayTab;
