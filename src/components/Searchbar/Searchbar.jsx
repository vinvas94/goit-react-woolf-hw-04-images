import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Write something in the search');
    } else {
      onSubmit(searchQuery);
      setSearchQuery('');
    }
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          autoComplete="off"
          onChange={handleChange}
        />
        <SearchFormButton type="submit" disabled={searchQuery === ''}>
          <span> Search</span>
        </SearchFormButton>
      </SearchForm>
    </SearchbarHeader>
  );
};

export default Searchbar;
