import { useState } from 'react';
import { createContext } from 'react';

export const TempMetricContext = createContext({
    fahrenheit: false,
    toggle: () => {},
});

export const TempMetricContextProvider = ({ children }) => {
    const [fahrenheit, setFahrenheit] = useState(false);

    const toggle = location => {
        setFahrenheit(!fahrenheit);
    };

    return (
        <TempMetricContext.Provider value={{ fahrenheit, toggle }}>
            {children}
        </TempMetricContext.Provider>
    );
};
