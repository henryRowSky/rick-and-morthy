import React from 'react';
import './styles/SearchForm.css';

const SearchForm = ({ onSubmit, onChange, value, removeSearch }) => (
  <form className='SearchForm' action='submit' onSubmit={onSubmit}>
    <input
      className='SearchForm__Input'
      onChange={onChange}
      value={value}
      placeholder='Buscar personaje...'
    />
    <button
      className='SearchForm__CancelButton'
      onClick={removeSearch}
      type='button'>
      X
    </button>
    <button className='SearchForm__Button' type='submit'>
      Buscar
    </button>
  </form>
);

export default SearchForm;
