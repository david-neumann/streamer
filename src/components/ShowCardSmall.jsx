import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SavedShowsContext } from '../savedShowsContext';

const ShowCardSmall = props => {
  const { setCurrentId } = useContext(SavedShowsContext);

  return (
    <Link to={`/showdetails/${props.id}`}>
      <img
        src={props.image !== null && props.image.original}
        alt={`${props.name} poster`}
        className='h-[190px] min-w-[135px] object-cover aspect-poster rounded-xl shadow-even xl:h-[245px] xl:min-w-[175px] xl:transition-all xl:duration-300 lg:transition-all lg:duration-300'
        onClick={() => setCurrentId(props.id)}
      />
    </Link>
  );
};

export default ShowCardSmall;
