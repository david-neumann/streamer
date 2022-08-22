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
      <div className='flex items-center transition-all lg:mx-10 lg:transition-all xl:mx-16 xl:transition-all'>
        <Link to='/'>
          <img
            src='/caret-left-purple.svg'
            alt='back arrow'
            className='h-12 pl-[4px] mt-3 ml-2 -mr-2
              sm:ml-8 sm:-mr-6 md:mt-7 md:ml-12 md:-mr-10 xl:ml-16 xl:-mr-14
              sm:transition-all md:transition-all xl:transition-all transition-all'
          />
        </Link>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          clearResults={clearResults}
          autoFocus={true}
        />
      </div>
      {searchResultsElements.length > 0 ? (
        <main className='m-6 transition-all sm:mx-12 md:mx-16 lg:mx-24 xl:mx-36 sm:transition-all md:transition-all lg:transition-all xl:transition-all'>
          {searchResultsElements}
        </main>
      ) : (
        <Link to='/'>
          <div className='h-screen w-7/8 px-8 text-center sm:px-12 md:px-16 xl:px-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
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
