import React from 'react';

const RepoItem = ({ repoData }) => {
  const { created_at, description, html_url, language, name, updated_at } = repoData;

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
    <section className='repo-item-outer'>
      <div className='repo-item'>
        <div className='repo-item-title'>
          <h1>{name}</h1>
        </div>
        <p>
          language: <span>{language}</span>
        </p>
        <p>
          date created: <span>{formatDate(created_at)}</span>
        </p>
        <p>
          date modified: <span>{formatDate(updated_at)}</span>
        </p>
        {description !== null && (
          <p>
            description: <span>{description}</span>
          </p>
        )}
        <a href={html_url}>{formatURL(html_url)}</a>
      </div>
    </section>
  );
};

export default RepoItem;
