import { useContext } from 'react';
import { SavedShowsContext } from '../savedShowsContext';
import EpisodeCard from '../components/EpisodeCard';

const ShowDetail = () => {
  const { savedShows } = useContext(SavedShowsContext);
  const { name, summary, premiered, network } = savedShows;

  let htmlFreeSummary;
  if (summary) {
    htmlFreeSummary = summary.replace(/(<([^>]+)>)/gi, '');
  }

  const renderedEpisodes = savedShows.episodes.map(episode => (
    <EpisodeCard {...episode} />
  ));

  console.log(savedShows);

  return (
    <>
      <header>
        <div className='min-h-[240px] w-full aspect-video bg-gradient-to-b from-transparent via-transparent to-white'>
          <img
            src='https://static.tvmaze.com/uploads/images/original_untouched/332/830233.jpg'
            alt='Ted Lasso'
            className='aspect-video object-cover absolute -z-10'
          />
        </div>
        <div className='ml-6'>
          <div className='flex justify-between items-center mr-6'>
            <div>
              <h1 className='text-slate-800 text-4xl font-bold'>{name}</h1>
              <p className='text-purple-800 font-light'>
                {premiered.slice(0, 4)} •{' '}
                {network ? savedShows.network.name : savedShows.webChannel.name}
              </p>
            </div>
            <img
              src='/plus.svg'
              alt='add button'
              className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full hover:bg-purple-300'
            />
          </div>
          <div className='flex flex-nowrap overflow-x-scroll mt-2'>
            <button className='border border-purple-800 mr-2 py-1 px-4 rounded-md text-xs whitespace-nowrap'>
              favorite
            </button>
            <button className='border border-purple-800 mr-2 py-1 px-4 rounded-md text-xs whitespace-nowrap'>
              couple watch
            </button>
            <button className='border border-purple-800 mr-2 py-1 px-4 rounded-md text-xs whitespace-nowrap'>
              football
            </button>
            <button className='border border-purple-800 bg-purple-800 mr-2 py-1 px-4 rounded-md text-white text-xs whitespace-nowrap'>
              Manage Tags ➔
            </button>
          </div>
        </div>
        <p className='mx-6 my-4 text-slate-800 font-light'>{htmlFreeSummary}</p>
      </header>
      <section className='mx-6'>
        <h2 className='text-slate-800 font-bold text-2xl mt-6'>Next Episode</h2>
        {renderedEpisodes}
      </section>
    </>
  );
};

export default ShowDetail;
