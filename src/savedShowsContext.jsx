import { createContext, useState, useEffect } from 'react';
import { getShowDetails, getEpisodeDetails, getShowImages } from './tvmazeAPI';

const SavedShowsContext = createContext();

const SavedShowsContextProvider = props => {
  // State used to pass id from home page to show details when a show is clicked
  const getInitialId = () => {
    const savedId = localStorage.getItem('savedId');
    return savedId ? JSON.parse(savedId) : '';
  };

  const [currentId, setCurrentId] = useState(getInitialId);

  useEffect(() => {
    localStorage.setItem('savedId', JSON.stringify(currentId));
  }, [currentId]);

  // State for saved shows, storing and retrieving from localStorage
  const getInitialState = () => {
    const savedData = localStorage.getItem('savedData');
    return savedData ? JSON.parse(savedData) : [];
  };

  const [savedShows, setSavedShows] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('savedData', JSON.stringify(savedShows));
  }, [savedShows]);

  // Get show details from API
  const retrieveShowDetailsFromApi = async id => {
    const showPromise = getShowDetails(id);
    const episodePromise = getEpisodeDetails(id);
    const imagesPromise = getShowImages(id);

    const [showDetails, episodeDetails, images] = await Promise.all([
      showPromise,
      episodePromise,
      imagesPromise,
    ]);

    const newEpisodesArray = episodeDetails.map(episode => ({
      ...episode,
      watched: false,
    }));

    const newShowObj = {
      ...showDetails,
      episodes: newEpisodesArray,
      images,
      tags: '',
    };

    return newShowObj;
  };

  // Save a new show from search results or show details
  const saveNewShow = async id => {
    const newShowObj = await retrieveShowDetailsFromApi(id);
    setSavedShows(prevSavedShows => [...prevSavedShows, newShowObj]);
  };

  return (
    <SavedShowsContext.Provider
      value={{
        currentId,
        setCurrentId,
        savedShows,
        setSavedShows,
        saveNewShow,
        retrieveShowDetailsFromApi,
      }}
    >
      {props.children}
    </SavedShowsContext.Provider>
  );
};

export { SavedShowsContext, SavedShowsContextProvider };
