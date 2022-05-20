import { Routes, Route } from 'react-router-dom';

import { GlobalStyle, Theme } from './styles/global.styles';
import { ThemeProvider } from 'styled-components';

import Home from './routes/home/home';
import TodayTab from './routes/today-tab/today-tab';
import ForecastTab from './routes/forecast-tab/forecast-tab';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<TodayTab />} />
                    <Route path='forecast' element={<ForecastTab />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
