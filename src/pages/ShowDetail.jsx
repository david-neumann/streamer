import { useContext } from 'react';
import { SavedShowsContext } from '../savedShowsContext';
import EpisodeCard from '../components/EpisodeCard';
import { Link } from 'react-router-dom';

const ShowDetail = () => {
  const { currentId, savedShows } = useContext(SavedShowsContext);

  const currentShowData = savedShows.filter(show => currentId === show.id);
  const { episodes, name, images, network, premiered, summary, webChannel } =
    currentShowData[0];

  const backgroundImg = images.find(image => image.type === 'background');
  const { url } = backgroundImg.resolutions.original;
  const year = premiered ? premiered.slice(0, 4) : '';
  const service = network ? network.name : webChannel.name;
  const htmlFreeSummary = summary ? summary.replace(/(<([^>]+)>)/gi, '') : '';

  console.log(currentShowData);
  console.log(backgroundImg);

  const renderedEpisodes = episodes ? (
    episodes.map(episode => <EpisodeCard key={episode.id} {...episode} />)
  ) : (
    <div></div>
  );

  return (
    <>
      <header className='relative'>
        <Link to='/'>
          <img
            src='/caret-left.svg'
            alt='back arrow'
            className='absolute top-0 left-0 h-20 py-4 pl-[4px] pr-8'
          />
        </Link>
        <div className='min-h-[240px] w-full aspect-video bg-gradient-to-b from-transparent via-transparent to-white'>
          <img
            src={backgroundImg && url}
            alt={name}
            className='aspect-video object-cover absolute -z-10'
          />
        </div>
        <div className='ml-6'>
          <div className='flex justify-between items-center mr-6'>
            <div>
              <h1 className='text-slate-800 text-4xl font-bold'>{name}</h1>
              <p className='text-purple-800 font-light'>
                {year} • {service}
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
        {episodes && renderedEpisodes}
      </section>
    </>
  );
};

export default ShowDetail;
