import React from 'react';
import './style.scss';

const SearchBar = ({ handleChange, keyword }) => (
  <div className="SearchBar">
    <form>
      <label htmlFor="text" className="SearchBar-text">
        <input
          className="SearchBar-input"
          key="random1"
          value={keyword}
          placeholder="Recherche ta formation"
          onChange={(e) => handleChange(e.target.value)}
        />
      </label>
      {/* <input type="submit" value="Categories" className="SearchBar-button" /> */}
    </form>
  </div>
);

export default SearchBar;
