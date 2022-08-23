import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedShowsContext } from '../savedShowsContext';

const ShowCardLarge = props => {
  const { setCurrentId } = useContext(SavedShowsContext);

  return (
    <Link to={`/showdetails/${props.id}`}>
      <img
        src={props.image !== null && props.image.original}
        alt={`${props.name} poster`}
        className='h-[315px] min-w-[225px] object-cover aspect-poster rounded-xl shadow-even transition-all xl:h-[364px] xl:min-w-[260px] xl:duration-300 lg:duration-300'
        onClick={() => setCurrentId(props.id)}
      />
    </Link>
  );
};

export default ShowCardLarge;
