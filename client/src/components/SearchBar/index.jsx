import React from 'react';
import './style.scss';

const SearchBar = () => (
  <div className="SearchBar">
    <form>
      <label htmlFor="text" className="SearchBar-text">
        <input type="text" name="formation" className="SearchBar-input" />
      </label>
      <input type="submit" value="Categories" className="SearchBar-button" />
    </form>
  </div>
);

export default SearchBar;
