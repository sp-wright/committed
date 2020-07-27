import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';

function App() {
  const [userData, setUserData] = useState([]);
  const [gotData, setGotData] = useState(false);

  const handleGotData = (i) => {
    setGotData(i);
  };

  return (
    <div>
      <Header />
      <Search
        userData={(e) => {
          setUserData(e);
          setGotData(true);
        }}
        handleGotData={(i) => handleGotData(i)}
      />
      {gotData && <SearchResults userData={userData} />}
    </div>
  );
}

export default App;
