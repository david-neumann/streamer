import { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';
import { SearchContext } from '../searchContext';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { searchResults, onSearchSubmit, clearResults } =
    useContext(SearchContext);

  const searchResultsElements = searchResults.map(result => (
    <SearchCard key={result.show.id} id={result.show.id} result={result} />
  ));

  return (
    <>
      <div className='flex items-center'>
        <Link to='/'>
          <img
            src='/caret-left-purple.svg'
            alt='back arrow'
            className='h-12 pl-[4px] mt-3'
          />
        </Link>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          clearResults={clearResults}
          autoFocus={true}
        />
      </div>
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
