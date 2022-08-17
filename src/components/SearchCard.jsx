import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedShowsContext } from '../savedShowsContext';

const SearchCard = ({ id, result }) => {
  const { name, summary, network, image, webChannel } = result.show;

  const htmlFreeSummary = summary ? summary.replace(/(<([^>]+)>)/gi, '') : '';

  const { setCurrentId, savedShows, saveNewShow } =
    useContext(SavedShowsContext);

  const isSavedShow = savedShows.some(show => id === show.id);

  return (
    <div className='flex w-full my-4 border-purple-800 rounded-xl shadow-episode'>
      <Link to={`/showdetails/${id}`}>
        {image !== null ? (
          <img
            src={image.original}
            alt={`${name} image`}
            className='max-w-[130px] h-full aspect-poster object-cover rounded-l-lg -z-10 cursor-pointer'
            onClick={() => setCurrentId(id)}
          />
        ) : (
          <div
            className='w-[130px] h-full aspect-poster rounded-l-lg -z-10
                bg-[url("/image.svg")] bg-center bg-contain bg-no-repeat bg-slate-200'
          ></div>
        )}
      </Link>
      <div>
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col justify-center ml-2'>
            <h2 className='text-slate-800 font-bold text-xl cursor-pointer'>
              {name}
            </h2>
            <p className='text-purple-800 font-light'>
              {network ? network.name : webChannel.name}
            </p>
          </div>
          {isSavedShow ? (
            <img
              src='/check-light.svg'
              alt='add button'
              className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center bg-purple-800'
              // onClick={() => saveNewShow(id)}
            />
          ) : (
            <img
              src='/plus.svg'
              alt='add button'
              className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center hover:bg-purple-200 cursor-pointer'
              onClick={() => saveNewShow(id)}
            />
          )}
        </div>
        <p className='px-2 py-2 last:mb-4 text-slate-800 font-light text-xs overflow-y-auto max-h-[100px]'>
          {htmlFreeSummary}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
