import EpisodeCard from '../components/EpisodeCard';

const ShowDetail = () => {
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
              <h1 className='text-slate-800 text-4xl font-bold'>Ted Lasso</h1>
              <p className='text-purple-800 font-light'>2020 • Apple TV+</p>
            </div>
            <img
              src='/plus.svg'
              alt='add button'
              className='w-10 p-2 mr-8 border-2 border-purple-800 rounded-full hover:bg-purple-300'
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
        <p className='mx-6 my-4 text-slate-800 font-light'>
          Ted Lasso centers on an idealistic — and clueless — all-American
          football coach hired to manage an English football club — despite
          having no soccer coaching experience at all.
        </p>
      </header>
      <section className='mx-6'>
        <h2 className='text-slate-800 font-bold text-2xl mt-6'>Next Episode</h2>
        <EpisodeCard />
      </section>
    </>
  );
};

export default ShowDetail;
