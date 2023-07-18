import React, { useState, useEffect } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Card from './Card';
import axios from 'axios';
import './Nav.css';
import { NavLink } from 'react-router-dom';

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
  useEffect(() => {
    handleSearch();
  }, [])
  return (
    <>
      <div className='nav'>
        <div className='links'>
          <NavLink to='/'>
            <button>Movies</button>
          </NavLink>
          <NavLink to='/signup'>
            <button>Signup</button>
          </NavLink>
          <NavLink to='/login'>
            <button>Login</button>
          </NavLink>

        </div>
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
        {loading ? "Loading..." : search && search.map((film) => <Card key={film.Title} film={film} />)}
      </div>
    </>
  );
};

export default Navbar;
