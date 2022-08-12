function EpisodeCard() {
  return (
    <div className='w-full my-4 border-purple-800 rounded-xl shadow-episode'>
      <div className='flex justify-between h-24 border-b border-slate-100 border-opacity-100'>
        <img
          src='https://static.tvmaze.com/uploads/images/original_untouched/342/856397.jpg'
          alt='episode image'
          className='aspect-square object-cover rounded-tl-lg -z-10'
        />
        <div className='flex flex-col justify-center -ml-20'>
          <h2 className='text-slate-800 font-bold text-2xl'>S01 | E01</h2>
          <p className='text-purple-800 text-lg font-semibold'>Pilot</p>
          <p className='text-slate-800 text-xs font-light'>31 minutes</p>
        </div>
        <img
          src='/check.svg'
          alt='add button'
          className='w-10 p-2 mr-8 border-2 border-purple-800 rounded-full self-center'
        />
      </div>
      <p className='px-4 py-2 text-slate-800 font-light text-sm'>
        It's Ted's first day of coaching, and fans aren't happy. He makes little
        headway but remains undeterred as the team plays its first match.
      </p>
    </div>
  );
}

export default EpisodeCard;
