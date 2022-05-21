import { useState } from 'react';
import { createContext } from 'react';

export const LocationContext = createContext({
    location: '',
    set: () => {},
});

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState('');

    const set = location => {
        setLocation(location);
    };

    return (
        <LocationContext.Provider value={{ location, set }}>
            {children}
        </LocationContext.Provider>
    );
};
