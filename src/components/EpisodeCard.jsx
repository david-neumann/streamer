import { useContext } from 'react';
import { SavedShowsContext } from '../savedShowsContext';

const EpisodeCard = ({
  id,
  showId,
  image,
  name,
  number,
  runtime,
  season,
  summary,
  watched,
}) => {
  const { savedShows, setSavedShows } = useContext(SavedShowsContext);

  const htmlFreeSummary = summary ? summary.replace(/(<([^>]+)>)/gi, '') : '';

  const toggleEpisodeWatched = () => {
    const updatedSavedShows = savedShows.map(show => {
      if (showId === show.id) {
        const newEpisodesArray = show.episodes.map(episode =>
          id === episode.id
            ? { ...episode, watched: !episode.watched }
            : episode
        );
        return { ...show, episodes: newEpisodesArray };
      } else {
        return show;
      }
    });

    setSavedShows(updatedSavedShows);
  };

  return (
    <div className='w-full my-4 border-purple-800 rounded-xl shadow-episode transition-all lg:w-[49%] lg:my-2'>
      <div className='flex justify-between h-24 border-b border-slate-100 border-opacity-100 transition-all md:h-32 lg:h-24'>
        {image !== null ? (
          <img
            src={image !== null ? image.original : ''}
            alt={`${name} image`}
            className='aspect-[4/3] object-cover rounded-tl-lg -z-10'
          />
        ) : (
          <div
            className='aspect-[4/3] object-cover rounded-tl-lg -z-10
              bg-[url("/image.svg")] bg-center bg-contain bg-no-repeat bg-slate-200'
          ></div>
        )}
        <div className='flex flex-col justify-center mr-auto pl-2 transition-all md:pl-4 lg:pl-2 lg:max-w-[55%] xl:pl-4 xl:max-w-[61%]'>
          <h2 className='text-slate-800 font-bold text-2xl transition-all md:text-3xl lg:text-2xl'>
            {season < 10 ? `S0${season}` : `S${season}`} |{' '}
            {number < 10 ? `E0${number}` : `E${number}`}
          </h2>
          <p className='text-purple-800 text-lg font-semibold truncate max-w-[180px] transition-all md:text-xl md:max-w-[360px] lg:text-lg'>
            {name}
          </p>
          <p className='text-slate-800 text-xs font-light transition-all md:text-sm lg:text-xs'>
            {runtime} minutes
          </p>
        </div>
        {watched ? (
          <img
            src='/check-light.svg'
            alt='check button'
            className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center bg-purple-800 cursor-pointer'
            onClick={toggleEpisodeWatched}
          />
        ) : (
          <img
            src='/check.svg'
            alt='add button'
            className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center hover:bg-purple-300 cursor-pointer'
            onClick={toggleEpisodeWatched}
          />
        )}
      </div>
      <p className='px-4 py-2 text-slate-800 font-light text-sm transition-all md:text-base md:py-4 md:px-5 lg:text-sm lg:px-4 lg:py-2'>
        {htmlFreeSummary}
      </p>
    </div>
  );
};

export default EpisodeCard;
