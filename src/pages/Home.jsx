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
  const renderedWantToWatch = savedShows.map(show => (
    <ShowCardSmall key={show.id} id={show.id} {...show} />
  ));

  return (
    <>
      <header className='flex items-center'>
        <h1
          className='hidden font-black text-5xl text-purple-600 
          mt-6 mr-16 -ml-6 uppercase order-last 
          drop-shadow-[2px_2px_0_rgba(30,41,59,1)]
          md:block md:transition-all md:duration-300 
          xl:text-6xl xl:transition-all xl:duration-300 xl:mr-20'
        >
          Streamer
        </h1>
        <Link to='/search' className='grow'>
          <SearchBar
            onSearchSubmit={onSearchSubmit}
            clearResults={clearResults}
            autoFocus={false}
          />
        </Link>
      </header>
      <main>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6 sm:mx-12 md:mx-16 xl:mx-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            <h2 className='text-slate-800 text-2xl font-bold md:text-3xl xl:text-4xl md:transition-all xl:transition-all transition-all'>
              Watching now
            </h2>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='flex flex-nowrap overflow-x-scroll gap-x-4 ml-6 sm:ml-12 md:ml-16 xl:ml-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            {renderedWatchingNow}
          </div>
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6 sm:mx-12 md:mx-16 xl:mx-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            <h2 className='text-slate-800 text-2xl font-bold md:text-3xl xl:text-4xl md:transition-all xl:transition-all transition-all'>
              Want to watch
            </h2>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='flex flex-nowrap overflow-x-scroll gap-x-4 ml-6 sm:ml-12 md:ml-16 xl:ml-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            {renderedWantToWatch}
          </div>
        </section>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4 mx-6 sm:mx-12 md:mx-16 xl:mx-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            <h2 className='text-slate-800 text-2xl font-bold md:text-3xl xl:text-4xl md:transition-all xl:transition-all transition-all'>
              All caught up
            </h2>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <div className='flex flex-nowrap overflow-x-scroll gap-x-4 ml-6 sm:ml-12 md:ml-16 xl:ml-20 sm:transition-all md:transition-all xl:transition-all transition-all'>
            {renderedWantToWatch}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
