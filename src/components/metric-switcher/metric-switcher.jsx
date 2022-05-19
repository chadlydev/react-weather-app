import { RoundButton, RoundButtonActive } from '../../styles/buttons';
import { MetricSwitcherContainer } from './metric-switcher.styles';
import { MetricSwitchText } from '../../styles/typography';

const MetricSwitcher = () => {
    return (
        <MetricSwitcherContainer>
            <RoundButtonActive>
                <MetricSwitchText>°C</MetricSwitchText>
            </RoundButtonActive>
            <RoundButton>
                <MetricSwitchText>°F</MetricSwitchText>
            </RoundButton>
        </MetricSwitcherContainer>
    );
};

export default MetricSwitcher;
