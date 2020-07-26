import React from 'react';
import bgImg2 from '../images/bg-waves2.svg';
import RepoList from './RepoList';

const SearchResults = ({ userData }) => {
  const { avatar_url, html_url, bio, created_at, updated_at, location, name, login, public_repos, blog } = userData[0];

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}/${month}/${year}`;
  };

  const formatURL = (url) => {
    return url.replace('https://', '');
  };

  return (
    <section className='search-results-outer-container'>
      <img className='bg-waves-2' src={bgImg2} alt='' />
      <div className='search-results-container'>
        <div className='search-results-text'>
          <div>
            <p>name</p>
          </div>
          <div>
            <p>{name}</p>
          </div>
          <div>
            <p>login</p>
          </div>
          <div>
            <p>{login}</p>
          </div>
          <div>
            <p>location</p>
          </div>
          <div>
            <p>{location}</p>
          </div>
          <div>biography</div>
          <div>
            <p>{bio}</p>
          </div>
          <div>
            <p>user since</p>
          </div>
          <div>
            <p>{formatDate(created_at)}</p>
          </div>
          <div>
            <p>last active</p>
          </div>
          <div>
            <p>{formatDate(updated_at)}</p>
          </div>
          <div>
            <p>public repositories</p>
          </div>
          <div>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>link</p>
          </div>
          <div>
            <a href={blog}>{formatURL(blog)}</a>
          </div>
        </div>
        <div className='search-image-container'>
          <img src={avatar_url} alt={name} />
          <a href={html_url}>{formatURL(html_url)}</a>
        </div>
      </div>
      <RepoList userRepos={userData[1]} />
    </section>
  );
};

export default SearchResults;
