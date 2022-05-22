import { useState } from 'react';
import { createContext } from 'react';

export const GeoLocationContext = createContext({
    geoLocation: {
        latitude: '',
        longitude: '',
    },
    set: () => {},
});

export const GeoLocationContextProvider = ({ children }) => {
    const [geoLocation, setGeoLocation] = useState({
        latitude: '',
        longitude: '',
    });

    const set = (lat, lon) => {
        setGeoLocation({
            latitude: lat,
            longitude: lon,
        });
    };

    return (
        <GeoLocationContext.Provider value={{ geoLocation, set }}>
            {children}
        </GeoLocationContext.Provider>
    );
};
