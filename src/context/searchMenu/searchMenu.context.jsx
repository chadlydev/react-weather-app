import { useState } from 'react';
import { createContext } from 'react';

export const SearchMenuContext = createContext({
    searchMenu: false,
    toggle: () => {},
});

export const SearchMenuContextProvider = ({ children }) => {
    const [searchMenu, toggleSearchMenu] = useState(false);

    const toggle = () => {
        toggleSearchMenu(!searchMenu);
    };

    return (
        <SearchMenuContext.Provider value={{ searchMenu, toggle }}>
            {children}
        </SearchMenuContext.Provider>
    );
};
