import { Fragment, useContext } from 'react';
import { SwitcherStyle } from './metricSwitcher.styles';
import { TempMetricContext } from '../../context/tempMetric/tempMetric.context';

const MetricSwitcher = () => {
    const { toggle } = useContext(TempMetricContext);

    return (
        <Fragment>
            <SwitcherStyle />
            <div className='weather-container-extention'>
                <p className='switch-label'>&deg;C</p>

                <span className='switch-wrapper'>
                    <input
                        type='checkbox'
                        className='switch'
                        id='metric-system'
                        onClick={toggle}
                    />

                    <label htmlFor='metric-system' className='switch-btn' />
                </span>

                <p className='switch-label'>&deg;F</p>
            </div>
        </Fragment>
    );
};

export default MetricSwitcher;
