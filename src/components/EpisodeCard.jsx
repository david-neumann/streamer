const EpisodeCard = props => {
  const htmlFreeSummary = props.summary
    ? props.summary.replace(/(<([^>]+)>)/gi, '')
    : '';

  return (
    <div className='w-full my-4 border-purple-800 rounded-xl shadow-episode'>
      <div className='flex justify-between h-24 border-b border-slate-100 border-opacity-100'>
        {props.image !== null ? (
          <img
            src={props.image !== null ? props.image.original : ''}
            alt={`${props.name} image`}
            className='aspect-[4/3] object-cover rounded-tl-lg -z-10'
          />
        ) : (
          <div
            className='aspect-square object-cover rounded-tl-lg -z-10
              bg-[url("/image.svg")] bg-center bg-contain bg-no-repeat bg-slate-200'
          ></div>
        )}
        <div className='flex flex-col justify-center mr-auto pl-2'>
          <h2 className='text-slate-800 font-bold text-2xl'>
            {props.season < 10 ? `S0${props.season}` : `S${props.season}`} |{' '}
            {props.number < 10 ? `E0${props.number}` : `E${props.number}`}
          </h2>
          <p className='text-purple-800 text-lg font-semibold truncate max-w-[180px]'>
            {props.name}
          </p>
          <p className='text-slate-800 text-xs font-light'>
            {props.runtime} minutes
          </p>
        </div>
        {props.watched ? (
          <img
            src='/check-light.svg'
            alt='check button'
            className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full bg-purple-800 cursor-pointer'
          />
        ) : (
          <img
            src='/check.svg'
            alt='add button'
            className='w-10 p-2 mr-4 border-2 border-purple-800 rounded-full self-center hover:bg-purple-300 cursor-pointer'
          />
        )}
      </div>
      <p className='px-4 py-2 text-slate-800 font-light text-sm'>
        {htmlFreeSummary}
      </p>
    </div>
  );
};

export default EpisodeCard;
