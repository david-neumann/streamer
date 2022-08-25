import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedShowsContext } from '../savedShowsContext';

const SearchCard = ({ id, result }) => {
  const { name, summary, network, image, webChannel } = result.show;

  const htmlFreeSummary = summary ? summary.replace(/(<([^>]+)>)/gi, '') : '';

  const { setCurrentId, savedShows, saveNewShow, removeSavedShow } =
    useContext(SavedShowsContext);

  const isSavedShow = savedShows.some(show => id === show.id);

  return (
    <div className='flex w-full my-4 border-purple-800 rounded-xl shadow-episode md:mb-6'>
      <Link to={`/showdetails/${id}`}>
        {image !== null ? (
          <img
            src={image.original}
            alt={`${name} image`}
            className='max-w-[130px] h-full aspect-poster object-cover rounded-l-lg -z-10 cursor-pointer transition-all
            md:max-w-[160px] lg:max-w-[200px] xl:max-w-[240px]'
            onClick={() => setCurrentId(id)}
          />
        ) : (
          <div
            className='w-[130px] h-full aspect-poster rounded-l-lg -z-10
                bg-[url("/image.svg")] bg-center bg-contain bg-no-repeat bg-slate-200 transition-all
                md:w-[160px] lg:w-[200px] xl:w-[240px]'
          ></div>
        )}
      </Link>
      <div className='grow'>
        <div className='flex justify-between mt-2 md:mt-4 transition-all'>
          <div
            className='flex flex-col justify-center transition-all ml-2 
            md:ml-4 lg:ml-6'
          >
            <h2 className='text-slate-800 font-bold text-xl cursor-pointer transition-all md:text-2xl xl:text-3xl'>
              {name}
            </h2>
            <p className='text-purple-800 font-light transition-all md:text-lg lg:text-xl'>
              {network ? network.name : webChannel.name}
            </p>
          </div>
          {isSavedShow ? (
            <img
              src='/check-light.svg'
              alt='add button'
              className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center bg-purple-800 transition-all lg:mr-6'
              onClick={() => removeSavedShow(id)}
            />
          ) : (
            <img
              src='/plus.svg'
              alt='add button'
              className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center hover:bg-purple-200 cursor-pointer transition-all
              lg:mr-6'
              onClick={() => saveNewShow(id)}
            />
          )}
        </div>
        <p
          className='px-2 py-2 last:mb-4 text-slate-800 font-light text-xs overflow-y-auto max-h-[100px] transition-all
          md:p-4 md:text-sm md:max-h-[125px] lg:px-6 lg:max-h-[185px]
          xl:text-base xl:max-h-[240px]'
        >
          {htmlFreeSummary}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
