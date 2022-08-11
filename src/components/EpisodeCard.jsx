function EpisodeCard() {
  return (
    <div className='flex justify-between h-24 w-[300px] my-4 ml-6 border-purple-800 rounded-xl shadow-episode'>
      <img
        src='https://static.tvmaze.com/uploads/images/original_untouched/342/856397.jpg'
        alt='episode image'
        className='aspect-square object-cover rounded-l-lg -z-10'
      />
      <div className='flex flex-col justify-center'>
        <h2 className='text-slate-800 font-bold text-2xl'>S01 | E01</h2>
        <p className='text-purple-800 text-lg font-semibold'>Pilot</p>
        <p className='text-slate-800 text-xs font-light'>31 minutes</p>
      </div>
      <img
        src='/check.svg'
        alt='add button'
        className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center'
      />
    </div>
  );
}

export default EpisodeCard;
