import { useState, useContext } from 'react';
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

const SearchMenu = () => {
    const [query, setQuery] = useState('');
    const { set } = useContext(LocationContext);
    const { toggle } = useContext(SearchMenuContext);

    function onFormSubmit(e) {
        e.preventDefault();
        set(query);
        toggle();
    }

    return (
        <SearchMenuContainer>
            <FormContainer onSubmit={onFormSubmit}>
                <SearchInput
                    placeholder='&#128269; Search location'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <SearchButton type='submit'>Search</SearchButton>
            </FormContainer>
            <ResultsContainer>
                <ResultText>Amsterdam</ResultText>
                <ResultText>London</ResultText>
                <ResultText>Paris</ResultText>
                <ResultText>Barcelona</ResultText>
            </ResultsContainer>
        </SearchMenuContainer>
    );
};

export default SearchMenu;
