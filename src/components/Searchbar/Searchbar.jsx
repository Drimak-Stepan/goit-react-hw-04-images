import { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

import {
  SearchbarCss,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit({ query });
    setQuery('');
  };

  return (
    <SearchbarCss>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <GoSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.currentTarget.value.toLowerCase())}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarCss>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
