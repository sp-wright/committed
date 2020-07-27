import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ userRepos }) => {
  const sortedRepos = userRepos.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
  return (
    <div className='repo-list-container'>
      <h1 className='repo-list-title'>Public Repositories</h1>
      <div className='repo-list'>
        {sortedRepos.map((repo) => (
          <RepoItem repoData={repo} key={repo.id} id={repo.id} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
