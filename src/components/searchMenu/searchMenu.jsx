import { useState, useContext, useEffect } from 'react';
import { LocationContext } from '../../context/location/location.context';
import { SearchMenuContext } from '../../context/searchMenu/searchMenu.context';

import {
    FormContainer,
    SearchInput,
    SearchMenuContainer,
    ResultsContainer,
    Wrapper,
    BackButtonContainer,
} from './searchMenu.styles';

import { BackText, ResultText } from '../../styles/typography';
import { SearchButton, BackButton } from '../../styles/buttons';

const SearchMenu = () => {
    const { set } = useContext(LocationContext);
    const { toggle } = useContext(SearchMenuContext);
    const cityList = require('../../assets/city.list.min.json');
    const [cities, setCities] = useState([]);

    useEffect(() => {
        cityList.map(city => {
            city.description = `${city.name.toLowerCase()}${
                city.state ? `, ${city.state}` : ''
            }, ${city.country}`;
            return city;
        });
    }, []);

    const onFormSubmit = e => {
        e.preventDefault();
        set(cities[0].description);
        toggle();
    };

    const closeMenu = () => {
        toggle();
    };

    return (
        <SearchMenuContainer>
            <Wrapper>
                <FormContainer onSubmit={onFormSubmit}>
                    <SearchInput
                        placeholder='&#128269; Search location'
                        onSelect={e => {
                            if (e.target.value) {
                                const value = e.target.value.toLowerCase();

                                if (value.length >= 2) {
                                    const possibleCities = cityList
                                        .filter(city =>
                                            city.description.includes(value)
                                        )
                                        .slice(0, 8);
                                    setCities(
                                        possibleCities.map(city => ({
                                            description: city.description,
                                            id: city.id,
                                        }))
                                    );
                                } else if (value.length < 2) {
                                    setCities([]);
                                }
                            }
                        }}
                    />
                    <SearchButton type='submit'>Search</SearchButton>
                </FormContainer>
                <ResultsContainer>
                    {cities.map(city => {
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
            </Wrapper>
            <BackButtonContainer>
                <BackButton onClick={closeMenu}>
                    <BackText>Back</BackText>
                </BackButton>
            </BackButtonContainer>
        </SearchMenuContainer>
    );
};

export default SearchMenu;
