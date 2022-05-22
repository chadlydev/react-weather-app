import { useState } from 'react';
import { createContext } from 'react';

export const GeoLocationContext = createContext({
    geoLocation: {},
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

    console.log(geoLocation);

    return (
        <GeoLocationContext.Provider value={{ geoLocation, set }}>
            {children}
        </GeoLocationContext.Provider>
    );
};
