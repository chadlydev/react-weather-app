import { useState, useContext, useEffect } from 'react';
import { LocationContext } from '../../context/location/location.context';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';

import {
    FormContainer,
    SearchInput,
    SearchMenuContainer,
    ResultsContainer,
} from './searchMenu.styles';

import { ResultText } from '../../styles/typography';
import { SearchButton } from '../../styles/buttons';
import capFirstLetter from '../../helpers/capFirstLetter';

const SearchMenu = () => {
    const { set } = useContext(LocationContext);
    const { toggle } = useContext(SearchMenuContext);
    const cityList = require('../../assets/city.list.min.json');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        cityList.map(city => {
            city.description = `${capFirstLetter(city.name)}${
                city.state ? `, ${city.state}` : ''
            }, ${city.country}`;
            return city;
        });
    }, []);

    function onFormSubmit(e) {
        e.preventDefault();
        set(cities[0].description);
        toggle();
    }

    return (
        <SearchMenuContainer>
            <FormContainer onSubmit={onFormSubmit}>
                <SearchInput
                    placeholder='&#128269; Search location'
                    onSelect={e => {
                        if (e.target.value) {
                            const value = capFirstLetter(e.target.value);

                            if (value.length >= 4) {
                                const possibleCities = cityList
                                    .filter(city =>
                                        city.description.includes(value)
                                    )
                                    .slice(0, 13);
                                setCities(
                                    possibleCities.map(city => ({
                                        description: city.description,
                                        id: city.id,
                                    }))
                                );
                            }
                        }
                    }}
                />
                <SearchButton type='submit'>Search</SearchButton>
            </FormContainer>
            <ResultsContainer>
                {cities.slice(0, 13).map(city => {
                    return (
                        <ResultText
                            onClick={() => {
                                set(city.description);
                                toggle();
                            }}
                            key={city.id}
                        >
                            {city.description}
                        </ResultText>
                    );
                })}
            </ResultsContainer>
        </SearchMenuContainer>
    );
};

export default SearchMenu;
