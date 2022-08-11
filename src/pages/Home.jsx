import ShowCardLarge from '../components/ShowCardLarge';
import ShowCardSmall from '../components/ShowCardSmall';

function Home() {
  return (
    <main>
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
  );
}

export default Home;
