import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';
import { getSearchResults } from '../tvmazeAPI';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onSearchSubmit = async searchTerm => {
    const resultsArray = await getSearchResults(searchTerm);
    setSearchResults(resultsArray.data);
  };

  const clearResults = () => setSearchResults([]);

  const searchResultsElements = searchResults.map(result => (
    <SearchCard key={result.show.id} id={result.show.id} result={result} />
  ));

  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <main className='m-6'>{searchResultsElements}</main>
    </>
  );
};

export default SearchResults;
