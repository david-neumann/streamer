import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ShowCardLarge from '../components/ShowCardLarge';
import ShowCardSmall from '../components/ShowCardSmall';
import { SavedShowsContext } from '../savedShowsContext';
import { SearchContext } from '../searchContext';

const Home = () => {
  const { onSearchSubmit, clearResults } = useContext(SearchContext);
  const { savedShows } = useContext(SavedShowsContext);

  const renderedWatchingNow = savedShows.map(show => (
    <ShowCardLarge key={show.id} id={show.id} {...show} />
  ));

  console.log(savedShows);

  return (
    <>
      <Link to='/search'>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          clearResults={clearResults}
          autoFocus={false}
        />
      </Link>
      <main>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6'>
            <h1 className='text-slate-800 text-2xl font-bold'>Watching now</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='flex flex-nowrap overflow-x-scroll gap-x-4 ml-6'>
            {renderedWatchingNow}
          </div>
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6'>
            <h1 className='text-slate-800 text-2xl font-bold'>Want to watch</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='ml-6'>
            <ShowCardSmall />
          </div>
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6'>
            <h1 className='text-slate-800 text-2xl font-bold'>All caught up</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='ml-6'>
            <ShowCardSmall />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
