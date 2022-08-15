import { useContext } from 'react';
import { SavedShowsContext } from '../savedShowsContext';

const SearchCard = ({ id, result }) => {
  const { name, summary, network } = result.show;

  let htmlFreeSummary;
  if (summary) {
    htmlFreeSummary = summary.replace(/(<([^>]+)>)/gi, '');
  }

  const { saveNewShow } = useContext(SavedShowsContext);

  return (
    <div className='flex w-full my-4 border-purple-800 rounded-xl shadow-episode'>
      <div>
        {result.show.image !== null ? (
          <img
            src={result.show.image.original}
            alt={`${name} image`}
            className='max-w-[130px] h-full aspect-poster object-cover rounded-l-lg -z-10 cursor-pointer'
          />
        ) : (
          <div
            className='w-[130px] h-full aspect-poster rounded-l-lg -z-10
              bg-[url("/image.svg")] bg-center bg-contain bg-no-repeat bg-slate-200'
          ></div>
        )}
      </div>
      <div>
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col justify-center ml-2'>
            <h2 className='text-slate-800 font-bold text-xl cursor-pointer'>
              {name}
            </h2>
            <p className='text-purple-800 font-light'>
              {network ? result.show.network.name : result.show.webChannel.name}
            </p>
          </div>
          <img
            src='/plus.svg'
            alt='add button'
            className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center hover:bg-purple-200 cursor-pointer'
            onClick={() => saveNewShow(id)}
          />
        </div>
        <p className='px-2 py-2 last:mb-4 text-slate-800 font-light text-xs overflow-y-auto max-h-[100px]'>
          {htmlFreeSummary}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
