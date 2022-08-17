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
        className='h-[315px] min-w-[225px] object-cover aspect-poster rounded-xl shadow-even'
        onClick={() => setCurrentId(props.id)}
      />
    </Link>
  );
};

export default ShowCardLarge;
