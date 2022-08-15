const EpisodeCard = props => {
  let htmlFreeSummary;
  if (props.summary) {
    htmlFreeSummary = props.summary.replace(/(<([^>]+)>)/gi, '');
  }

  return (
    <div className='w-full my-4 border-purple-800 rounded-xl shadow-episode'>
      <div className='flex justify-between h-24 border-b border-slate-100 border-opacity-100'>
        <img
          src='https://static.tvmaze.com/uploads/images/original_untouched/342/856397.jpg'
          alt='episode image'
          className='aspect-square object-cover rounded-tl-lg -z-10'
        />
        <div className='flex flex-col justify-center mr-auto pl-2'>
          <h2 className='text-slate-800 font-bold text-2xl'>
            {props.season < 10 ? `S0${props.season}` : `S${props.season}`} |{' '}
            {props.number < 10 ? `E0${props.number}` : `E${props.number}`}
          </h2>
          <p className='text-purple-800 text-lg font-semibold truncate max-w-[200px]'>
            {props.name}
          </p>
          <p className='text-slate-800 text-xs font-light'>
            {props.runtime} minutes
          </p>
        </div>
        <img
          src='/check.svg'
          alt='add button'
          className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center'
        />
      </div>
      <p className='px-4 py-2 text-slate-800 font-light text-sm'>
        {htmlFreeSummary}
      </p>
    </div>
  );
};

export default EpisodeCard;
