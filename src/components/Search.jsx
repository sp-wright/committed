import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-scroll';
import bgWaves from '../images/bg-waves.svg';

const Search = ({ userData, handleGotData }) => {
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [emptyResults, setEmptyResults] = useState(false);

  const searchSubmit = async (e) => {
    handleGotData(false);
    setSearching(true);
    setLoading(true);
    setEmptyResults(false);
    e.preventDefault();
    const getData = async () => {
      let allRepos = [];
      try {
        const userInfo = await axios.get(`https://api.github.com/users/${searchText}`);
        for (let i = 1; i < 100; i++) {
          const userRepos = await axios.get(`https://api.github.com/users/${searchText}/repos?page=${i}&per_page=100`);
          allRepos = [...allRepos, ...userRepos.data];
          if (userRepos.data.length < 100) {
            break;
          }
        }
        userData([userInfo.data, allRepos]);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setSearching(false);
        setEmptyResults(true);
      }
    };
    getData();
    setSearchText('');
  };

  const noResults = {
    border: '2px solid red',
  };

  return (
    <section className='search-container'>
      <img className='bg-waves' src={bgWaves} alt='' />
      <div className='search-text-container'>
        <h2>
          Search for <span>Committed</span> developers
        </h2>
        <p>search a developer's github username to get all the useful information you need to make recruitment decisions</p>
        <p>get information like...</p>
        <ul>
          <li>links to all public repositories</li>
          <li>recent activity</li>
          <li>profile image</li>
        </ul>
      </div>
      <div className='search-input-container'>
        <form onSubmit={searchSubmit}>
          <input
            style={emptyResults ? noResults : null}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type='text'
            name='search-field'
            autoComplete='off'
            placeholder={emptyResults ? `Oops, we couldn't find that user...` : 'Enter a GitHub username...'}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      {searching && (
        <div className='spinner-container'>
          {loading ? (
            <i className='fas fa-asterisk fa-2x rotate-center'></i>
          ) : (
            <Link activeClass='active' to='search-results-outer-container' spy={true} smooth={true} offset={0} duration={0}>
              <i className='fas jello-horizontal fa-5x fa-sort-down'></i>
            </Link>
          )}
        </div>
      )}
    </section>
  );
};

export default Search;
