import React, { useState, useMemo, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from './Card';
import axios from 'axios';
import './Nav.css';

const Navbar = () => {
  const [inputValue, setInputValue] = useState("James Bond");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSearch = async (e) => {
    e && e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${inputValue}&apikey=4c2ef208`);
      const apiresultss = response.data;
      setSearch(apiresultss.Search);
      setError(null);
      setLoading(false);
    } catch (error) {
      setSearch([]);
      setError(error);
      error && setLoading(false);
    }
  };
  useEffect((e) => {
    handleSearch(e);
  },[])
  return (
    <>
      <div className='nav'>
        <div>Movies</div>
        <form onSubmit={handleSearch}>
          <div className='searchIcon'>
            <SearchOutlinedIcon className='icon' />
            <input
              type='search'
              placeholder='search'
              className='input'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit'>Search</button>
          </div>
        </form>
      </div>
      {error && <div className='error'>Error: {error.message}</div>}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px 0px'
        }}
      >
        {loading ? "Loading..." : search.map((film) => <Card key={film.Title} film={film} />)}
      </div>
    </>
  );
};

export default Navbar;
