import { createContext, useState } from 'react';
import { getSearchResults } from './tvmazeAPI';

const SearchContext = createContext();

const SearchContextProvider = props => {
  const [searchResults, setSearchResults] = useState([]);

  const onSearchSubmit = async searchTerm => {
    const resultsArray = await getSearchResults(searchTerm);
    setSearchResults(resultsArray.data);
  };

  const clearResults = () => setSearchResults([]);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        onSearchSubmit,
        clearResults,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
