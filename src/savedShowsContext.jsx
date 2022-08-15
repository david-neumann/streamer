import { createContext, useState, useEffect } from 'react';
import { getShowDetails, getEpisodeDetails, getShowImages } from './tvmazeAPI';

const SavedShowsContext = createContext();

const SavedShowsContextProvider = props => {
  const getInitialState = () => {
    const savedData = localStorage.getItem('savedData');
    return savedData ? JSON.parse(savedData) : [];
  };

  const [savedShows, setSavedShows] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('savedData', JSON.stringify(savedShows));
  }, [savedShows]);

  const saveNewShow = async id => {
    const showPromise = getShowDetails(id);
    const episodePromise = getEpisodeDetails(id);
    const imagesPromise = getShowImages(id);

    const [showDetails, episodeDetails, images] = await Promise.all([
      showPromise,
      episodePromise,
      imagesPromise,
    ]);

    console.log(episodeDetails);

    const newEpisodesArray = episodeDetails.map(episode => ({
      ...episode,
      watched: false,
    }));

    const newShowObj = {
      ...showDetails,
      episodes: newEpisodesArray,
      images: { ...images },
    };

    setSavedShows(newShowObj);
  };

  return (
    <SavedShowsContext.Provider value={{ savedShows, saveNewShow }}>
      {props.children}
    </SavedShowsContext.Provider>
  );
};

export { SavedShowsContext, SavedShowsContextProvider };
