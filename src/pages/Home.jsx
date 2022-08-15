import ShowCardLarge from '../components/ShowCardLarge';
import ShowCardSmall from '../components/ShowCardSmall';

const Home = () => {
  return (
    <>
      <header className='mx-6 mt-12 mb-8 h-12 relative'>
        <input
          type='text'
          placeholder='Search for TV Shows'
          className='
                border border-purple-800 rounded-lg shadow-even 
                text-slate-800 placeholder:text-slate-400
                w-full pl-4 pr-16 py-2'
        />
        <img
          src='/search-light.svg'
          alt='search icon'
          className='h-[41px] absolute right-0 top-0 py-2 px-4 bg-purple-800 rounded-r-lg'
        />
      </header>
      <main className='mx-6'>
        <section className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-slate-800 text-2xl font-bold'>Watching now</h1>
            <p className='text-purple-900 font-light'>See All</p>
          </div>
          <ShowCardLarge />
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
