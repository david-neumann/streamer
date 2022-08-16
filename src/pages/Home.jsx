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

  return (
    <>
      <Link to='/search'>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          clearResults={clearResults}
        />
      </Link>
      <main className='mx-6'>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-slate-800 text-2xl font-bold'>Watching now</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          {renderedWatchingNow}
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-slate-800 text-2xl font-bold'>Want to watch</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <ShowCardSmall />
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-slate-800 text-2xl font-bold'>All caught up</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <ShowCardSmall />
        </section>
      </main>
    </>
  );
};

export default Home;
