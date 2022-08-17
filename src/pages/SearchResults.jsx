import { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';
import { SearchContext } from '../searchContext';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { searchResults, onSearchSubmit, clearResults } =
    useContext(SearchContext);

  console.log(searchResults);

  const searchResultsElements = searchResults.map(result => (
    <SearchCard key={result.show.id} id={result.show.id} result={result} />
  ));

  return (
    <>
      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      {searchResultsElements.length > 0 ? (
        <main className='m-6'>{searchResultsElements}</main>
      ) : (
        <Link to='/'>
          <div className='h-screen w-7/8 px-8'>
            <h2 className='text-slate-800 italic'>
              Don't want to search? Click anywhere below the search bar to go
              Home.
            </h2>
          </div>
        </Link>
      )}
    </>
  );
};

export default SearchResults;
